// Campos: questions, answer, level, isActive

import { Schema, model } from "mongoose";
const faqsSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            minLenght: 4 
        },
        answer: {
            type: String, 
            require: true,
            minLenght: 4,
            trim: true
        },
        level: {
            type: Number,
            min: 1,
            max: 5,
            require: true,
            trim: true
        },
        isActive: {
            type: Boolean,
            require: true,
            default: true
        }
    }, {
        timestamps: true,
        strict: false
    }
) 

export default model("Faqs", faqsSchema)