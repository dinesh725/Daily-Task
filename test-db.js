const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully!');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Task Schema
const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  tasks: [{
    startTime: String,
    endTime: String,
    plan: String,
    actual: String,
    category: String,
    rowId: String,
    manual: Boolean
  }]
});

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task', taskSchema);

// Test function
async function testDatabase() {
  try {
    // Create a test user
    const testUser = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'testpassword'
    });
    
    const savedUser = await testUser.save();
    console.log('User saved:', savedUser);
    
    // Create a test task
    const testTask = new Task({
      userId: savedUser._id,
      date: new Date().toISOString().split('T')[0],
      tasks: [
        {
          startTime: '09:00',
          endTime: '10:00',
          plan: 'Test task',
          actual: 'Test task completed',
          category: 'Testing',
          rowId: '1',
          manual: true
        }
      ]
    });
    
    const savedTask = await testTask.save();
    console.log('Task saved:', savedTask);
    
    // Retrieve the task
    const retrievedTask = await Task.findOne({ userId: savedUser._id });
    console.log('Retrieved task:', retrievedTask);
    
    // Clean up - delete test data
    await Task.deleteOne({ _id: savedTask._id });
    await User.deleteOne({ _id: savedUser._id });
    console.log('Test data cleaned up');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Test error:', error);
    mongoose.connection.close();
  }
}

testDatabase();