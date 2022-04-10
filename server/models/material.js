// require modules for the Material  Model
let mongoose = require('mongoose');

let MaterialDatasheet = mongoose.Schema(
    {
        name:
        {
            type: String,
            default: '',
            trim: true,
            required: 'name is required'
        },
        description:
        {
            type: String,
            default: '',
            trim: true,
        },
        attachement:
        {
            type: String,
        }

    },
    {
        collection: "materialDatasheet"
    }

);

let Model = mongoose_1.default.model("Material", MaterialDatasheet);
exports.default = Model;