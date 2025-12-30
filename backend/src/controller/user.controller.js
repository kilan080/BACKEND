import { User } from "../modules/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email} = req.body;

        // basic validation
        if( !username || !password || !email) {
            return res.status(400).json({
               message: "All fields are important!!!"
            })
        }

        // check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if(existingUser) {
            return res.status(400).json({ message: "User already exists!!" });
        }

        //Create a user
        const user = await User.create({
            username,
            password,
            email: email.toLowerCase(),
            loggedIn: false
        })

        return res.status(201).json({ message: "User registered", user: {id: user._id, email: user.email, username: user.username} });
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message});
    }
}


const loginUser = async (req, res) => {
    try {
        //if the user already exists    
        const { email, password} = req.body;

        const user = await User.findOne({ 
            email: email.toLowerCase()
        }); 
        if(!user) return res.status(404).json({
            message: "User not found!!"
        })

        //compare password
        const isMatch = await user.comparePassword(password);

        if(!isMatch) return res.status(400).json({
            message: "invalid credentials"
        })

        res.status(200).json({
            message: "User logged In",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "internal Server Error"
        })
    }
}

const logOutUser = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await user.findOne({
            email
        });

        if(!user) return res.status(404).json({
            message: "User not found"
        });
        res.status(200).json({
            message: "log out successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal sserver error", error
        })
    }
}

export { registerUser, loginUser, logOutUser };