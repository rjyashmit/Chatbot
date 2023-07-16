module.exports =
{

	ChatbotReply: function (message) {
		// Bot's data
		this.Bot_Age = 22;
		this.Bot_Name = "Bittu";
		this.Bot_University = "Jain University";
		this.Bot_Country = "India";
		this.Bot_Department = "Ise";
		this.Bot_Hodname = "Dr.Jayanthi";
		this.Bot_Hodbehaviour = "Good";
		this.Bot_6thSemsubject = "Ai,Ml,DM,OODST,ACN";
		// User data
		this.User_Age;
		this.User_Name;
		this.User_University;
		this.User_Department;
		this.User_Hodname;
		this.User_Hodbehaviour;
		this.User_6thSemsubject;
		// Message processing... 
		message = message.toLowerCase()

		if (message.indexOf("hi") > -1 || message.indexOf("hello") > -1 || message.indexOf("welcome") > -1) {
			return "Hi!";
		}
		else if (message.indexOf("age") > -1 && message.indexOf("your")) {
			return "I'm " + this.Bot_Age;
		}
		else if (message.indexOf("how") > -1 && message.indexOf("are") && message.indexOf("you")) {
			return "I'm fine ^_^"
		}
		else if (message.indexOf("where") > -1 && message.indexOf("live") && message.indexOf("you")) {
			return "I live in " + this.Bot_Country;
		}
		else if (message.indexOf("department") > -1 && message.indexOf("live") && message.indexOf("you")) {
			return "My department is " + this.Bot_Department;
		}
		else if (message.indexOf("hod name") > -1 && message.indexOf("live") && message.indexOf("you")) {
			return "My hod name is " + this.Bot_Hodname;
		}
		else if (message.indexOf("hod behaviour") > -1 && message.indexOf("live") && message.indexOf("you")) {
			return "My hod behaviour is " + this.Bot_Hodbehaviour;
		}
		else if (message.indexOf("subject") > -1 && message.indexOf("live") && message.indexOf("you")) {
			return "6th sem subject is " + this.Bot_6thSemsubject;
		}
		return "Sorry, I didn't get it :( ";
	}


};