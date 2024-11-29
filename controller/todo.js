var todoModel = require('../modle/todo')

exports.createTodo = async (req, res) => {
    try {

        const jokes = await todoModel.create(req.body)
        res.status(200).json({
            status: 'Success',
            Message: 'Data enter success',
            Data: jokes
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

exports.show = async (req, res) => {
    try {
        const jokes = await todoModel.find();
        res.status(200).json({
            status: "Success",
            message: 'Data shown successfully',
            data: jokes
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        });
    }
};

exports.delete = async (req, res) => {
    const Id = req.params.id;
    try {
        const deletdata = await todoModel.findByIdAndDelete(Id);

        res.status(200).json({
            status: "success",
            message: 'Data deleted successfully',
            data: deletdata
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
            data: []
        });
    }
};

exports.updete = async (req, res) => {
    const Id = req.params.id;
    try {
        const updetedata = await todoModel.findByIdAndUpdate(Id, req.body)
        res.status(200).json({
            status: "success",
            Message: 'data updete succes',
            Data: updetedata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not updete",
            data: []
        })

    }
}