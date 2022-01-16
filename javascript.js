document.body.onload = ShowContents;//자동실행

var data = [
	{
		"title":"[Playlist] 월요병 ㅃㅃㅣ산뜻하게 충전하는 하루! ㅣCharge Up Your Day!",
		"profileName":"essential;",
		"view":"5639530",
		"date":"2019. 12. 2."
	},
	{
		"title":"[Playlist] 기분전환하고 싶을 때 Pop Pop!ㅣIf you're feeling bored, Pop Pop!",
		"profileName":"essential;",
		"view":"1379496",
		"date":"2020. 8. 20."
	}
];

function ShowContents () {
	var container = document.getElementById('container');
	
	for (var i = 0; i < 20; i++) { //컨텐츠 개수만큼 생성 fix - 20개 형성 
		var content = document.createElement('div');
		var video = document.createElement('img');
		var profileImg = document.createElement('img');
		var title = document.createElement('div');
		var profileName = document.createElement('div');
		
		var viewNdate = document.createElement('div');
		var view = document.createElement('div');
		var date = document.createElement('div');
		
		content.className = 'content';
		content.id = 'content' + i; 
		container.append(content); //class:content, id가 딸린 div tag형성
		
		var content = document.getElementById('content' + i);//컨테이너-컨텐츠
		video.className = 'video'; //썸네일
		video.srcset = './contents/' + (i % 2) + '.jpg'
		video.style.width = "100%";

		
		profileImg.className = 'profileImg'; //프로필이미지
		profileImg.srcset = './contents/' + i % 2 + 'profile.jpg'
		profileImg.style.width = "40px";

		
		title.className = 'title'; //제목
		title.appendChild(document.createTextNode(data[i % 2].title));

		profileName.className = 'profileName'; //프로필이름
		profileName.appendChild(document.createTextNode(data[i % 2].profileName));

		viewNdate.className = 'viewNdate'; //viewMdate div <-- view + date
		
		view.className = 'view'; //조회수
		view.appendChild(document.createTextNode(data[i % 2].view));

		
		date.className = 'date'; //날짜
		date.appendChild(document.createTextNode(data[i % 2].date));
		
		content.append(video, profileImg, title, profileName, viewNdate); 
		viewNdate.append(view, document.createTextNode(" ㆍ "),  date);
		
	}
}