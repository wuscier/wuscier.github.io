/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Xu Wu",
    "role": "Web Frontend Developer",
    "contacts": {
        "wechat": "wuscier",
        "mobile": "13552351806",
        "email": "1352288123@qq.com",
        "github": "http://www.github.com/wuscier",
        "twitter": "13552351806",
        "blog": "http://www.cnblogs.com/wuscier",
        "location": "Beijing, China"
    },
    "welcomeMessage": "Let's communicate and be friends!",
    "skills": ["programming", "fluent English", "basketball","cooking"],
    "biopic": "images/wuxu.jpg",
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedWechat = HTMLcontactGeneric.replace("%contact%", "wechat").replace("%data%", bio.contacts.wechat);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    $("#topContacts").append(formattedWechat);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedBlog);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedWechat);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);

    $("#header").append(formattedPic);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    $("#header img").css("width", 150);
    $("#header img").css("height", 150);
};

var education = {
    "schools": [
        {
            "name": "Luoyang Institute of Science and Technology",
            "location": "Luoyang, Henan",
            "degree": "Bachelor",
            "majors": ["Principles of Computer Organization", "An Introduction to Database System", "Computer Networks", "Operating System", "Discrete Mathematics", "C Programming", "Assembly Language", "C# Programming", "ASP.NET", "Java Programming"],
            "dates": "2009-2013",
            "url": "http://www.lit.edu.cn/"
        },
        {
            "name": "Wuxue Senior High School",
            "location": "Huanggang, Hubei",
            "degree": "Senior High School",
            "majors": ["Chinese", "Math", "English", "Physics", "Chemistry", "Biology"],
            "dates": "2005-2008",
            "url": "http://www.hbswxzx.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Fluent English Speaker",
            "school": "Wall Street English",
            "dates": "2015-2017",
            "url": "http://www.wsi.com.cn/"
        },
        {
            "title": "Full Stack Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2017-2018",
            "url": "http://www.udacity.com"
        }
    ]
};

education.display = function () {
    education.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);

    });


    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (onlineCourse) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    });
};

var work =
    {
        "jobs": [
            {
                "employer": "Shengtao Education Technology Co. Ltd.",
                "url": "http://www.shengtao.net",
                "title": "Senior Software Engineer",
                "location": "Weidi Science and Technology Building 11F, Zhongguancun South Street No. 8, Haidian District, Beijing",
                "dates": "2016.5-now",
                "description": "developing interactive live apps"
            },
            {
                "employer": "Beyondsoft",
                "url": "http://www.beyondsoft.com",
                "title": "Senior Software Engineer",
                "location": "Beyondsoft Headquarters, Bldg. 7, East Zone, Courtyard #10, Xibeiwang East Road, Haidian District, Beijing 100193 P.R.C.",
                "dates": "2015.3-2016.5",
                "description": "developing tools for virus analysis"
            },
            {
                "employer": "Toshiba（China）Co., Ltd.",
                "url": "http://www.toshiba.com.cn/",
                "title": "Software Developer",
                "location": "Room 1401, Tower D1, Liangmaqiao Diplomatic Office Building, Building 5, No.19, Dongfangdonglu, Chaoyang District, Beijing 100600, China",
                "dates": "2014.2-2015.2",
                "description": "developing voice recognition clients"
            },
            {
                "employer": "Guoli Textile dyeing and finishing Co. Ltd.",
                "url": "http://www.glfz.net/",
                "title": "Software Developer",
                "location": "Wujin District, Changzhou, Jiangsu, China",
                "dates": "2013.2-2014.2",
                "description": "ERP development"
            }
        ],
    }

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#",job.url);
        var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
        var formattedDates = HTMLworkDates.replace("%data%",job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%",job.description);

        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

var projects = {
    "projectArr":
    [
        {
            "title": "Advanced Software Engineer",
            "dates": "2016.5-now",
            "description": "Develop interactive live products that share resources across schools",
            "images": ["images/st1.jpg", "images/st2.jpg", "images/st3.jpg", "images/st4.jpg"]
        },
        {
            "title": ".NET Engineer",
            "dates": "2015.3-2016.5",
            "description": "Develop a tool to help analyze virus using big data",
            "images": ["images/bigdata1.jpg", "images/bigdata2.jpg", "images/bigdata3.jpg", "images/bigdata4.jpg"]
        },

        {
            "title": ".NET Engineer",
            "dates": "2014.2-2015.2",
            "description": "A voice recognition client that recognizes spkears' voice and translates into different languages. It can also display all kinds of documents, like ppt and word, etc.",
            "images": ["images/voice1.jpg", "images/voice2.jpg", "images/voice3.jpg", "images/voice4.jpg"]
        },

        {
            "title": "Group Leader",
            "dates": "2013.2-2014.2",
            "description": "A product that manages people, production, repertory and finance. It realizes paperless work and shares information across different departments ",
            "images": ["images/guoli1.jpg", "images/guoli2.jpg", "images/guoli3.jpg", "images/guoli4.jpg"]
        }
    ]
}

projects.display = function () {
    this.projectArr.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function (image) {
            var formattedPic = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedPic);
        });
    });

    $(".project-entry img").css("width", 200);
    $(".project-entry img").css("height", 100);
};


bio.display();
education.display();
work.display();
projects.display();