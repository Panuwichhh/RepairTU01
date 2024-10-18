const bcrypt = require("bcryptjs");
const User = require('../Models/User.js');

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      res.status(400).send("Error registering user");
    }
  });