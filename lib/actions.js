'use server';
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";


function isInvalidText(text) {
    return !text || text.trim() === '';
}

// Define validation rules and messages
const validationRules = {
    title: {
        validator: isInvalidText,
        message: "Title is required and cannot be empty."
    },
    summary: {
        validator: isInvalidText,
        message: "Summary is required and cannot be empty."
    },
    instructions: {
        validator: isInvalidText,
        message: "Instructions are required and cannot be empty."
    },
    creator: {
        validator: isInvalidText,
        message: "Creator's name is required and cannot be empty."
    },
    creator_email: {
        validator: value => isInvalidText(value) || !value.includes("@"),
        message: "Please enter a valid email address."
    },
    image: {
        validator: image => !image || image.size === 0,
        message: "An image file is required. Please upload an image."
    }
};

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    }

    for (const [key, { validator, message }] of Object.entries(validationRules)) {
        if (validator(meal[key])) {
            return { message };
        }
    }

    await saveMeal(meal);
    redirect("/meals");
}