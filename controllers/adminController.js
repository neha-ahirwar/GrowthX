// controllers/adminController.js
module.exports = {
    acceptAssignment: (req, res) => {
        // Logic for accepting an assignment
        res.send("Assignment Accepted");
    },
    rejectAssignment: (req, res) => {
        // Logic for rejecting an assignment
        res.send("Assignment Rejected");
    },
    viewAssignments: (req, res) => {
        // Logic to view assignments
        res.send("List of Assignments");
    }
};
