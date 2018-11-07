import { Component, OnInit } from "@angular/core";
import { TriviaService } from "../trivia.service";

@Component({
  selector: "submit-component",
  templateUrl: "./submit.component.html",
  styleUrls: ["./submit.component.scss"]
})
export class SubmitComponent implements OnInit {
  question: Object = { q: "", wrongAnswers: ["", "", ""], correctAnswer: "" };
  errorMsg: string[] = [];
  constructor(private triviaService: TriviaService) {}

  addQuestion() {
    this.errorMsg = [];
    if (!this.checkQuestion()) {
      return;
    }
    this.triviaService.addQuestion(this.question);
    this.question = { q: "", wrongAnswers: ["", "", ""], correctAnswer: "" };
  }
  checkQuestion() {
    if (
      this.question["q"] === "" ||
      this.question["correctAnswer"] === "" ||
      this.question["wrongAnswers"].includes("''")
    ) {
      this.errorMsg.push("No fields can be blank");
    }
    if (
      this.question["wrongAnswers"].includes(this.question["correctAnswer"])
    ) {
      this.errorMsg.push(
        "Wrong Answers must be different from the correct answer"
      );
    }
    if (
      this.question["wrongAnswers"][0] === this.question["wrongAnswers"][1] ||
      this.question["wrongAnswers"][0] === this.question["wrongAnswers"][2] ||
      this.question["wrongAnswers"][1] === this.question["wrongAnswers"][2]
    ) {
      this.errorMsg.push('Wrong answers must all be different');
    }
    return this.errorMsg.length === 0;
  }
  ngOnInit() {}
}
