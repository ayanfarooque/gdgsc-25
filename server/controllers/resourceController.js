const Resources = require('../models/Resources.js')

exports.createResources = async (req,res) => {
    try {
        const Resources = new Resources(req.body);
        await Resources.save();
        res.status(201).json({messsage: "Resources Created Successfully", Resources});
    } catch (error) {
        console.error("Error creating Resources:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


exports.getResourcesbyID = async (req,res) => {
    try {
        const Resources = await Resources.findById(req.params.ResourcesId);
        if(!Resources){
            return res.status(404).json({message: "Resources not found"});
        }

        res.status(200).json(Resources);
    } catch (error) {
        console.error("Error fetching Resources:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.updateResources = async (req, res) => {
    try {
        const updatedResources = await Resources.findByIdAndUpdate(req.params.ResourcesId, req.body, { new: true });
        if (!updatedResources) {
            return res.status(404).json({ message: "Resources not found" });
        }
        res.status(200).json({ message: "Resources updated successfully", updatedResources });
    } catch (error) {
        console.error("Error updating Resources:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteResources = async (req, res) => {
    try {
        const deletedResources = await Resources.findByIdAndDelete(req.params.ResourcesId);
        if (!deletedResources) {
            return res.status(404).json({ message: "Resources not found" });
        }
        res.status(200).json({ message: "Resources deleted successfully" });
    } catch (error) {
        console.error("Error deleting Resources:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getAllResources = async (req, res) => {
    try {
        const ResourcesList = await Resources.find().sort({ createdAt: -1 }); 
        res.status(200).json(ResourcesList);
    } catch (error) {
        console.error("Error fetching Resources:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};