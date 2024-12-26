// build out basic messages ui that we can connect to our database
"use client";
import { api } from "@/convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { useState } from "react";

export default function Home() {
  const messages = useQuery(api.functions.message.list);
  const createMessage = useMutation(api.functions.message.create);

  // message input
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevents page from refreshing on submit
    createMessage({ sender: "Alice", content: input });
    setInput("");
  };

  return (
    <>
      <Authenticated>
        <div>
          {messages?.map((message, index) => (
            <div key={index}>
              <strong>{message.sender}</strong>: {message.content}
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              id="message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
