There is a **new repository** for this lesson. It is [**here**](https://github.com/Code-the-Dream-School/06-jobs-api)[.](https://github.com/Code-the-Dream-School/06-jobs-api) This is because you will eventually deploy the repository to a cloud service so that it runs on the Internet. The instructor has you do the work in the `node-express-course/06-jobs-api/starter` directory, and then copy that entire directory tree to a folder outside of the `node-express-course` folder, and then do a `git init`. That is complicated and messy. So we have this new repository instead. It is just a copy of the starter directory, but in its own repository. So, fork this repository and then clone your fork. For a reminder on how to fork a Github repo, you can refer to the instructions at the top of the [Lesson 1 Assignment.](./ctd-node-lesson1.md)

### **Warning!**

When you clone, make sure you are not inside the`node-express-course` folder, so that you keep this repository separate.

You will do your work in this new `06-jobs-api` repository directory. If you get stuck, answers are in the old repository, in the `node-express-course/06-jobs-api/final` directory, but please try to do your own work. Before you start this lesson, you create the `week9` git branch.

### **Warning!**

**_Do not_** do the copy of the starter directory that is described by the instructor.

**_Do not_** do the `git init`.

You can choose to just repeat the work that the instructor shows, but it is better if you invent a model for a new kind of record you want to create instead of the Job model, as described above in the “Thinking About Your Final Project” section.

**Be sure you test each step with Postman, creating a Postman collection of tests just like the instructor is doing.** This Postman collection of tests is used not only to test the API as it runs on your machine, but also, in Lesson 10, to test the application as deployed to Render.com. (We deploy to Render.com instead of to Heroku, as Heroku no longer allows applications to be deployed for free.)