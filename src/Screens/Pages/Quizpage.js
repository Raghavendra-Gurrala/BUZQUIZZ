import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import { Layout, Button } from "antd";

const { Header, Sider, Content } = Layout;

function Quizpage() {
  const [questions] = useState([
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 2 + 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "5",
    },
    {
      question: "What is 3 + 3?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "6",
    },
    {
      question: "What is 3 + 1?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "What is 3 - 3?",
      options: ["3", "0", "5", "6"],
      correctAnswer: "0",
    },
    // Add more questions here
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showScorecard, setShowScorecard] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    // Update user's selected answer
    setUserAnswers([...userAnswers, selectedOption]);

    // Move to the next question or show the scorecard when all questions are answered
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScorecard(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: "#fff", boxShadow: "0px 4px 6px #C7C7C5" }}
        >
          <Topbar />
        </Header>
        <Content style={{ padding: "20px" }}>
          {showScorecard ? (
            <div>
              <h1>Quiz Completed!</h1>
              <p>
                Your Score: {calculateScore()} out of {questions.length}
              </p>
            </div>
          ) : (
            <div>
              <h2>Question {currentQuestion + 1}</h2>
              <p>{questions[currentQuestion].question}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={{ margin: "5px" }}
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Quizpage;
