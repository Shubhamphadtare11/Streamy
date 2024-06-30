import React from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const actualComment = [
    {
      name:"@spillthebuzz",
      text:"I've watched this video like 10 times already, and each time, it's just as impressive as the first.",
      reply:[
        {
          name: "Luisa Martinez",
          text: "This video made my entire day! Thanks so much for sharing such an inspiring piece.",
          reply: [],
        },
      ]
      
    },
    {
      name:"@DebojyotiMandal",
      text:"Great job! Keep up the fantastic work you're doing. I'm looking forward to more content from you.",
      reply:[
        {
          name: "Hiroki Tanaka",
          text: "Anyone else watching in Lockdown? This video really speaks to current time",
          reply: [],
        },
        {
          name: "Sophie Dupont",
          text: "his content deserves way more views! I hope it gets the recognition it truly deserves.",
          reply: [],
        },
      ]
    },
    {
      name:"@Elena",
      text:"You kept the old cooking style alive, fan of the your cooking brother",
      reply:  [
        {
          name: "Elena Petrova",
          text: "This is absolutely the best tutorial I've found on this particular topic. Clear and informative!",
          reply: [],
        },
        {
          name: "Anna Petrovna",
          text: "This content deserves way more views! I hope it gets the recognition it truly deserves.",
          reply: [],
        },
      ]
    },
    {
      name: "@Muhammad",
      text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
      reply: [
        {
          name: "Sophie Smith",
          text: "Your tutorials are incredibly helpful! Looking forward to EP-04!",
          reply: [],
        },
        {
          name: "John Doe",
          text: "Your JavaScript explanations are top-notch! Keep up the great work!",
          reply: [],
        },
        {
          name: "Emily Johnson",
          text: "I've learned so much from your videos! Can't wait for the next episode!",
          reply: [],
        },
        {
          name: "Daniel Brown",
          text: "Your content has really inspired me to dive deeper into JavaScript!",
          reply: [],
        }
      ]
    },
    {
      name: "@spillthebuzz",
      text: "I was feeling tired after studying for hours, then stumbled upon this playlist... It's like a breath of fresh air!",
      reply: [
        {
          name: "Jessica Lee",
          text: "Your playlist is exactly what I needed to unwind after a long day! Thank you!",
          reply: [],
        },
        {
          name: "Michael Clark",
          text: "Listening to your playlist is like therapy for my soul. It's so soothing!",
          reply: [],
        }
      ]
    },
    {
      name: "@DebojyotiMandal",
      text: "Your JavaScript tutorials are amazing! When can we expect EP-04?",
      reply: [
        {
          name: "Alice Brown",
          text: "Your explanations are so clear and easy to follow. Can't wait for the next one!",
          reply: [],
        },
        {
          name: "David Wilson",
          text: "Your tutorials have been a game-changer for me. Looking forward to more!",
          reply: [],
        }
      ]
    },
    {
      name: "@Maddy",
      text: "Your voice is truly magical! 💫💖",
      reply: [
        {
          name: "Sophia Garcia",
          text: "Listening to your voice brings so much joy! Keep singing!",
          reply: [],
        },
        {
          name: "Andrew Miller",
          text: "Your voice is like a ray of sunshine on a cloudy day. Love it!",
          reply: [],
        }
      ]
    },
    {
      name: "@Joe",
      text: "Your JavaScript tutorials are fantastic! Can't wait for more content from you.",
      reply: [
        {
          name: "Isabella Martinez",
          text: "Your tutorials are so helpful! They've really boosted my understanding of JavaScript!",
          reply: [],
        },
        {
          name: "Liam Wilson",
          text: "Your explanations are so clear and concise. Looking forward to the next tutorial!",
          reply: [],
        }
      ]
    }
  ]
  
  const Comment = ({ data }) => {
    return (
      <>
        <div className="flex">
          <img
            className="h-8 col-span-1"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user-logo"
          />
          <div className="px-3 mb-5">
            <p className="font-bold">{data.name}</p>
            <p>{data.text}</p>
            <p className="flex text-25 mt-2">
              {" "}
              <FiThumbsUp className="mx-2 mr-3 mt-1" />
              652
              <FiThumbsDown className="mx-2 mr-3 ml-3 mt-2" />
              25
              <span className="ml-5"> Reply</span>
            </p>
          </div>
        </div>
      </>
    );
  };
  
  const CommentList = ({ comments }) => {
    return (
      <>
        {/* Desclaimer : Please use key as a index */}
        {comments.map((comment, index) => {
          return (
            <>
              <div className="p-2" key={index} >
                <Comment key={index} data={comment} />
                <div className="pl-5 ml-5">
                  <CommentList comments={comment.reply} />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  
  const CommentsContainer = () => {
    return (
      <div className="p-1 m-1 w-2/3">
        <CommentList comments={actualComment} />
      </div>
    );
  };
  
  export default CommentsContainer;  