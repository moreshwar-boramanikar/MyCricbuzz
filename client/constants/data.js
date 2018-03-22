var myApp = angular.module("myconstants",[]);

myApp.constant("data",[
    {
        id:1,
        url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg/220px-Sachin_Tendulkar_at_MRF_Promotion_Event.jpg",
        comments:[{
            username:"Akash Bhandwalkar",
            comment:"nice article"
        },
        {
            username:"Vivek Wagh",
            comment:"useful article"
        }],
        description:[{
            name:"Sachin Tendulkar",
            jersino:10
        }]
    },
    {
        id:2,
        url:"https://img.etimg.com/thumb/msid-61580947,width-643,imgsize-265596,resizemode-4/virat-kohlis-fitness-tip-for-india-inc-organise-sportswear-day-in-offices-for-a-healthier-workforce.jpg",
        comments:[{
            username:"Akash Bhandwalkar",
            comment:"nice article"
        },
        {
            username:"Vivek Wagh",
            comment:"useful article"
        }],
        description:[{
            name:"Virat Kohli",
            jersino:18
        }]
    },
    {
        id:3,
        url:"https://s.ndtvimg.com/images/content/2016/jul/806/ms-dhoni-champions-trophy-0707.jpg",
        comments:[{
            username:"Akash Bhandwalkar",
            comment:"nice article"
        },
        {
            username:"Vivek Wagh",
            comment:"useful article"
        }],
        description:[{
            name:"MS Dhoni",
            jersino:7
        }]
    }
]);