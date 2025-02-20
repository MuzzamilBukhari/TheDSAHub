import React, { useState } from "react";
import Button from "../ui/Button";

type Comment = {
  name: string;
  comment: string;
};


const CommentsSection = () => {
   const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([
      { name: "Ali", comment: "Very Helpful blog" },
      { name: "Huzaifa", comment: "Nice post" },
      { name: "Umair", comment: "Great bro. very helpful for dsa beginners..." },
    ]);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setComments([...comments, { name, comment }]);
      setName("");
      setComment("");
    };
  
   
  return (
    <div className="w-full ">
      <h3 className="text-2xl font-semibold text-primary ">Comments</h3>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex justify-center items-center flex-col gap-6">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
          />
          <textarea
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full bg-primary bg-opacity-10 rounded border border-primary/60 focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-primary/40 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
          />
          <Button type="submit" className="border-2 border-primary">
            Submit
          </Button>
        </div>
      </form>
      <ul className="mt-8 space-y-4">
        {comments.map((c, index) => (
          <li key={index}>
            <div className="w-full border-2 border-primary p-4 rounded-lg">
              <h4 className="text-primary font-semibold">{c.name}</h4>
              <h5>{c.comment}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
