export async function Signup(req, res) {
  const { name, age, gender, phoneNumber, address, email, password } = req.body;

  try {
    if (!name || !email || !password) { return res.status(400).json({ message: "Please provide all required fields." }); }

    const existingUser = await User.findOne({ email: { $regex: new RegExp(email, "i") } });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      age,
      gender,
      phoneNumber,
      address,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res.status(201).json({ message: "User signed up successfully", success: true, data: user, token });
  } catch (error) { console.error(error); return res.status(500).json({ message: "Internal Server Error" }); }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('All fields are required');
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email: { $regex: new RegExp(email, "i") } });
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: "User not found" });
    }

    const auth = await bcrypt.compare(password, user.password);
    console.log('Password Comparison Result:', auth);

    if (!auth) {
      console.log('Incorrect password');
      return res.status(401).json({ message: "Incorrect password" });
    }

    console.log('Login Successful');

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
      expiresIn: 3 * 24 * 60 * 60,
    });

    res.status(200).json({ message: "User logged in successfully", success: true, token });
  } catch (error) { console.error('Login failed', error); res.status(500).json({ message: 'Login failed. Please try again.' }); }
}