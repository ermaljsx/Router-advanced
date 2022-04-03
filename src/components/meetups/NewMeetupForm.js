import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ( props ) => {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const handleSubmit = ( event ) => {

        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddMeetup( meetupData );

    }

    return (
        <Card>
            <form
                className = { classes.form }
                onSubmit = { handleSubmit }
            >
                <div className = { classes.control }>
                    <label htmlFor = "title">Meetup Title</label>
                    <input
                        id = "title"
                        ref = { titleInputRef }
                        type = "text"
                        required
                    />
                </div>

                <div className = { classes.control }>
                    <label htmlFor = "image">Meetup Image</label>
                    <input
                        id = "image"
                        ref = { imageInputRef }
                        type = "url"
                        required
                    />
                </div>

                <div className = { classes.control }>
                    <label htmlFor = "address">Address</label>
                    <input
                        id = "address"
                        ref = { addressInputRef }
                        type = "text"
                        required
                    />
                </div>

                <div className = { classes.control }>
                    <label htmlFor = "description">Description</label>
                    <textarea
                        id = "description"
                        ref = { descriptionInputRef }
                        rows = "5"
                        required
                    ></textarea>
                </div>

                <div className = { classes.actions }>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;