const formatDate = require("./src/utils/format-date.js")

module.exports = function (plop) {
  plop.setGenerator("posts", {
    description: "generate a template file for posts",
    prompts: [
      {
        type: "list",
        name: "category",
        message: "select the category:",
        choices: ["front", "back", "mobile", "management", "career", "dev"],
        default: 0,
      },
      {
        type: "input",
        name: "title",
        message: "post title:",
      },
    ],
    actions: function (data) {
      const formattedDate = formatDate(new Date())
      return [
        {
          type: "add",
          data: {
            date: formattedDate.date,
            hour: formattedDate.hour,
          },
          path: "posts/" + formattedDate.date + "-{{dashCase title}}.md",
          templateFile: "plop-templates/post.hbs",
        },
      ]
    },
  })
}
