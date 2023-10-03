import React, { useState } from "react";
import {Link} from 'react-router-dom'

const DynamicForm = () => {
const [ngoId, setNgoId] = useState("");
const [questions, setQuestions] = useState({});
const [formData, setFormData] = useState({});

const handleNgoIdChange = (event) => {
setNgoId(event.target.value);
};

const handleAddQuestion = () => {
setQuestions({
...questions,
[ngoId]: questions[ngoId] ? [...questions[ngoId], ""] : [""],
});
};

const handleRemoveQuestion = (index) => {
const updatedQuestions = [...questions[ngoId]];
updatedQuestions.splice(index, 1);
setQuestions({ ...questions, [ngoId]: updatedQuestions });
};

const handleQuestionChange = (index, event) => {
const updatedQuestions = [...questions[ngoId]];
updatedQuestions[index] = event.target.value;
setQuestions({ ...questions, [ngoId]: updatedQuestions });
};

const handleFormSubmit = (event) => {
event.preventDefault();
const jsonLogic = {
ngoId: ngoId,
questions: questions[ngoId],
formData: formData,
};
console.log(jsonLogic);
};

const handleInputChange = (event) => {
const { name, value } = event.target;
setFormData({ ...formData, [name]: value });
};

return (
<div className="row">
<h1 text-center>Requirement Form</h1>
<form onSubmit={handleFormSubmit}>

<h2 text-center>Questions:</h2>
{questions[ngoId] &&
questions[ngoId].map((question, index) => (
<div key={index}>
<input
type="text"
value={question}
onChange={(event) => handleQuestionChange(index, event)}
/>
<button type="button" onClick={() => handleRemoveQuestion(index)}>
Remove
</button>
</div>
))}
<button type="button" onClick={handleAddQuestion}>
Add Question
</button>

<br />
<br />
<Link to = "/VolReq" className = "btn btn-primary">Submit</Link>
</form>
</div>
);
};

export default DynamicForm;