
const wn = [5,7,11];//무기 공통 개수 n,r,s
const tn = [4,7,10];//기술 공통 개수 n,r,s
const sn = [8,8,10];//생존 공통 개수 n,r,s

var tylc;

var duia;
var duic;
var duis;

var ia=15;//무기고 분류 0.없음1.파워2.무기4.기술8.생존 (최고치 15)
var ic=511;//조건별 분류(선택시: 안보임)
	/*0없음, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시(최고치 511(보여짐))
	*/
var is=8191;//상승별 분류(선택시 보임)
	/*0없음, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수 (최고치 8191)
	*/ 

var pname;
var pex;
var pc;
var ps;

var wnname;
var wnex;
var wnm;
var wnc;
var wns;
var wnname;
var wnex;
var wnm;
var wnc;
var wns;
var wrname;
var wrex;
var wrm;
var wrc;
var wrs;
var wsname;
var wsex;
var wsm;
var wsc;
var wss;

var tnname;
var tnex;
var tnm;
var tnc;
var tns;
var tnname;
var tnex;
var tnm;
var tnc;
var tns;
var trname;
var trex;
var trm;
var trc;
var trs;
var tsname;
var tsex;
var tsm;
var tsc;
var tss;

var snname;
var snex;
var snm;
var snc;
var sns;
var snname;
var snex;
var snm;
var snc;
var sns;
var srname;
var srex;
var srm;
var src;
var srs;
var ssname;
var ssex;
var ssm;
var ssc;
var sss;

var pon

function tlc(n){
	lc=n;
}

function reset(){
	pname=[];
	pex=[[]];
	pc=[];
	ps=[];
	//무기 노말 1~5
	wnname=["무기 기름칠",
		"보정기",
		"플라스마 전환기",
		"광란 증폭기",
		"탄약 보존"];

	wnex=[["공격 속도 +5%"],
		["무기 공격력 +5%"],
		["무기 생명력 흡수 +10%"],
		["처치 시 3초 동안 공격 속도가 10%, 이동 속도가 15% 증가합니다."],
		["최대 탄약 +20%"]];

	wnm=[1000,1000,1000,1500,1500];
	wnc = [256, 256, 256, 128, 256];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	wns=[16,1,512,16+32,2048];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/ 
	//무기 희귀(1~7)
	wrname=["부품 시장 발사 핀",
		"고급 나노생물학",
		"보호막 파쇄자",
		"화약고",
		"테크노흡혈",
		"차가운 냉각수",
		"탈론 개조 모듈"];

	wrex=[["공격 속도 +10%","이동 속도 +5%"],
		["무기 공격력 +5%","아군 치유 후 공격 속도가 3초 동안 10% 증가합니다."],
		["무기 공격력 +5%","보호막이나 방어력에 피해를 주면 공격 속도가 1초 동안 15% 증가합니다."],
		["공격 속도 +5%", "최대 탄약 +25%"],
		["무기 공격력 +5%", "무기 생명력 흡수 +10%"],
		["무기 공격력 +10%", "기술 재사용 대기시간 감소 +5%"],
		["무기 공격력 +15%"]];
	wrm=[3750,4000,4000,4000,4500,5000,5500];
	wrc = [256, 128, 128, 256, 256,256,256];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	wrs=[48,17,17,16+2048,1+512,1+64,1];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/
	//무기 특별(1~11)
	wsname=["코드브레이커",
		"볼스카야 군수품",
		"회수 산탄",
		"무기 재머",
		"사령관의 탄창",
		"강화광 가속기",
		"부스터 제트",
		"아마리의 해독제",
		"엘사카 제압기",
		"종결자",
		"거미의 눈"];

	wsex=[["무기 공격력 +15%","방어력의 피해 감소를 50%만큼 무시합니다."],
		["공격 속도 +10%", "내 영웅보다 대상의 최대 생명력이 높을 경우, 대상의 최대 생명력 100당 무기 공격력이 5% 증가합니다.(최대 20%)"],
		["공격 속도 +10%", "방벽에 대한 피해 +30%", "방벽에 무기 피해를 주면 50% 확률로 탄약을 1발 회복합니다."],
		["방어력 +25", "무기 공격력 +10%", "무기 피해를 주면 2초 동안 공격 속도가 10% 증가하고, 대상의 추가 공격 속도를 10% 무효화합니다."],
		["공격 속도 +10%", "최대 탄약 +40%", "기술 사용 시 최대 탄약을 10% 회복합니다."],
		["무기 공격력 +10%", "기술 재사용 대기시간 감소 +10%", "기술 사용 시 3초 동안 무기 공격력 +5%를 얻습니다. (최대 3회 중첩)"],
		["공격 속도 +20%", "기술 사용 시 2초 동안 이동 속도가 10% 증가합니다."],
		["생명력 +25", "무기 공격력 +15%", "생명력이 50% 미만인 아군을 무기로 치유하는 중, 무기 치유량이 15% 증가합니다."],
		["무기 공격력 +10%", "치명타 시 대상에게 2초 동안 치유 감소 30%를 적용합니다."],
		["무기 공격력 +20%", "치명타 피해 +10%", "치명타가 대상을 3초 동안 드러냅니다."],
		["무기 공격력 +25%", "생명력이 30% 미만인 적에게 주는 피해가 10% 증가합니다."]];
	wsm=[9000,9500,9500,10000,10000,11000,11000,11000,11000,13000,13500];
	wsc = [128,128,1+4,1+4,8+16+32+64,8+16+32+64,8+16+32+64,1+4,128,128,128];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 판정시),8.보조발사(기술 판정시),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	wss=[1+4096,1+16,16+2048,1+16+256+4096,16+2048,1+64,16+32,1+256+4096,1+4096,1+8+4096,1+4096];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/  
	//기술 기본(1~4)
	tnname=["수상쩍은 장관",
		"충전 판갑",
		"파워 전술",
		"승리의 태도"
	];
	tnex=[["기술 생명력 흡수 +10%"],
		["궁극기 충전을 소모한 후, 해당 라운드가 끝날 때까지 방어력 25와 기술 위력 +10%를 얻습니다."],
		["기술 위력 +10%"],
		["생명력 +25"," 사망 시 궁극기 충전을 15% 얻습니다."]];

	tnm=[1000,1000,1000,1500];
	tnc = [256, 64, 256, 128];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	tns=[1024,2+256,2,256+4096];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/ 
	//기술 희귀(1~7)
	trname=["맞춤형 개머리판",
		"생체광 오버플로",
		"손목 싸개",
		"쓰레기촌 뭐더라",
		"에너지 충전 손목 방어구",
		"다용도 도구",
		"나노 콜라"];

	trex=[["기술 위력 +10%", "무기 공격력 +5%"],
		["생명력 +25", "기술 위력 +5%", "궁극기 충전 사용 시 근처 아군에게 3초 동안 50의 추가 생명력을 부여합니다."],
		["기술 위력 +5%", "공격 속도 +10%"],
		["25% 궁극기 충전 시작"],
		["기술 위력 +10%", "기술 생명력 흡수 +10%"],
		["기술 위력 +5%", "기술 재사용 대기시간 감소 +10%"],
		["기술 위력 +20%"]];
	trm=[3750,4000,4000,4000,4000,5000,5500];
	trc = [256, 64, 256, 256, 256,256,256];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	trs=[1+2,2+256,2+16,4096,2+1024,2+64,2];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/
	//기술 특별(1~10)
	tsname=["3연속 토미건 발사",
		"루메리코 융합 기관포",
		"생체기술 극대화",
		"초굴근",
		"촉매 수정",
		"사이버베놈",
		"광채 눈동자",
		"액체질소",
		"여우의 징표",
		"챔피언의 도구"];

	tsex=[["기술 위력 +10%", "공격 속도 +10%", "기술 사용 후, 다음 3번의 무기 공격이 대상 생명력의 3%에 해당하는 추가 피해를 줍니다."],
		["방어력 +50", "기술 위력 +15%", "기술 사용 시 2초에 걸쳐 50의 방어력 또는 보호막을 회복합니다."],
		["생명력 +25", "기술 위력 +10%", "치유 기술을 사용하면 치유한 아군 하나 당 해당 기술의 재사용 대기시간이 5% 감소합니다."],
		["생명력 +25", "무기 공격력 +10%", "무기 피해 또는 치유가 3초 동안 5%의 기술 위력을 부여합니다. (최대 5회 중첩)"],
		["기술 위력 +15%", "기술 피해 및 치유가 궁극기 충전을 20% 추가로 부여합니다."],
		["기술 위력 +10%", "기술 재사용 대기시간 감소 +5%", "기술로 피해를 주면 2초 동안 치유 감소 30%를 적용합니다."],
		["기술 위력 +20%", "기술 재사용 대기시간 감소 +10%", "궁극기 충전 사용 후 3초 동안 추가 생명력 100을 얻습니다."],
		
		["생명력 +25", "기술 위력 +10%", "기술로 피해를 주면 3초 동안 대상의 이동속도가 20% 감소합니다."],
		["기술 위력 +10%", "기술 사용 시, 다음 무기 피해 또는 치유량이 25 증가합니다."],
		["기술 위력 +40%"]];
		
	tsm=[9500,10000,10000,10000,10000,10500,11000,11000,11000,13500];
	tsc=[8+16+32+64,8+16+32+64,8+16+32+64,1+4,256,8+16+32+64,64,8+16+32+64,8+16+32+64,256];
	
	/*조건 0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 판정시),8.보조발사(기술 판정시),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	tss=[2+16+4096,2+256,2+64+256,1+2+256,2+4096,2+64+4096,2+64+256,2+256+4096,2+4096,2];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/
	
	
	//생존 노말(1~8)
	snname=["러닝화",
		"아드레날린 주사",
		"전투식량",
		"전해액",
		"심장 박동 센서",
		"응급 치료 키트",
		"장갑 조끼",
		"흡수 장갑"
	];
	snex=[["생명력 +10", "라운드 시작 시, 처음 부활할 때, 전투 중이 아닐 경우 10초 동안 이동속도가 20% 증가합니다."],
		["생명력 +10", "생명력 팩이 5초 동안 이동속도를 20% 증가시키고 50의 추가 생명력을 부여합니다."],
		["거점에 있을 때 1초마다 생명력을 8 회복합니다."],
		["라운드 시작 시 추가 생명력 100을 얻습니다."],
		["이동속도 +5%", "생명력이 30% 미만인 적이 드러납니다."],
		["보호막 +25", "내 영웅의 생명력을 재생하기까지 걸리는 시간이 33% 감소합니다."],
		["방어력 +25"],
		["생명력 +25", "빠른 근접 공격으로 피해를 주면 생명력을 25 치유합니다."]];

	snm=[1000,1000,1000,1000,1500,1500,1500,1500];
	snc = [128, 128, 128, 128, 256, 256, 256, 128];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	sns=[32+256,32+256,256,256,32+4096,256,256,256];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/ 
	//기술 희귀(1~8)
	srname=["강화 티타늄",
		"E생명력",
		"비슈카르 콘덴서",
		"완충재",
		"철갑 배기구",
		"강철 눈",
		"성전사 유압 시스템",
		"메카 Z 시리즈"];

	srex=[["보호막 +25", "보호막이 있을 때 기술 피해를 15% 덜 받습니다."],
		["방어력 +10", "100의 생명력을 방어력으로 전환합니다."],
		["보호막 +25", "100의 생명력을 보호막으로 전환합니다."],
		["보호막 +25", "해로운 효과 지속시간 -40%", "기절, 수면, 방해받으면 3초에 걸쳐 최대 생명력을 10% 회복합니다."],
		["기술 재사용 대기시간 감소 +5%", "기술 사용 시 3초 동안 추가 생명력 25를 얻습니다."],
		["보호막 +25", "치명타로 받는 피해가 20% 감소합니다."],
		["방어력 +25", "방어력이 있을 때 받는 무기 피해가 10% 감소합니다."],
		["생명력, 방어력, 보호막 +8%"]];
		srm=[3750,4000,4000,4000,4000,4500,4500,5000];
		src = [128, 256, 256, 128, 8+16+32+64,256,128,256];
	/*0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	srs=[256,256,256,256+4096,64+256,256+4096,256+4096,256];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/
	//기술 특별(1~10)
	ssname=["유전학자의 약병",
		"신성한 개입",
		"어둠의 건틀릿",
		"피의 구속",
		"뤼스퉁 폰 빌헬름",
		"바나듐 주사",
		"화성의 수리공",
		"환영 유입",
		"성운 전도",
		"오군디무 감소장"];

		ssex=[["생명력 +25", "매 라운드에서 처음으로 사망할 때마다 3초 후 200의 생명력을 갖고 부활합니다."],
		["보호막 +50", "한 번에 100보다 많은 피해를 받으면 받은 피해의 15%를 회복하고 보호막 재생을 시작합니다."],
		["방어력 +50", "근접 공격력 +15%", "근접 공격 시 이동 속도가 10% 증가하고, 2초에 걸쳐 최대 생명력의 5%만큼 회복합니다."],
		["생명력 +50", "내 영웅에게 마지막으로 결정타를 날린 적이 근처에 있으면 해당 적이 드러납니다.","해당 적에게 주는 피해가 10% 증가하고 받는 피해는 10% 감소합니다."],
		["생명력, 방어력, 보호막 +15%", "생명력이 30% 미만일 때 10%의 피해 감소를 얻습니다."],
		["궁극기 충전이 100% 상태일 때 다음을 얻습니다.","생명력 +50, 무기 공격력 +10%", "기술 위력 +10%, 공격 속도 +10%", "기술 재사용 대기시간 감소 +10%, 이동 속도 +10%"],
		["생명력 +25", "기술 재사용 대기시간 감소 +10%", "1초마다 생명력을 3% 회복합니다."],
		["무기 공격력 +10%, 기술 위력 +10%", "무기 생명력 흡수 +15%, 기술 생명력 흡수 +15%", "생명력이 가득 차 있을 때 생명력 흡수로 최대 100의 추가 생명력을 얻습니다."],
		["생명력 +50", "무기 공격력 +5%", "받는 피해를 15% 막는 대신, 막은 피해를 3초에 걸쳐 나눠 받습니다."],
		["방어력 +50", "피해를 받으면 1초 동안 0.5%의 피해 감소를 얻습니다. (최대 20회 중첩)"]];
		
		ssm=[9000,9500,9500,9500,10000,10000,10000,10000,11000,11000];
		ssc=[128,128,128,128,128,128,256,128,128,256];
	
	/*조건 0전체, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 판정시),8.보조발사(기술 판정시),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시
	*/
	sss=[256,256,4+256,256+4096,256+4096,1+2+16+32+64+256,
		64+256,1+2+512+1024,1+256+4096,256+4096];
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/  
}

function padd(t,r,nu,na,m,ex,c,s){//종류,등급,들어갈 숫자, 이름, 비용, 내용
	if(t=='p'){
		//document.write(na+','+ex+','+c+','+s);
		pname[nu-1]=na;
		pex[nu-1]=ex;
		pc[nu-1]=c;
		ps[nu-1]=s;
	}
	else if(t=='w'){
		if(r=='n'){
			wnname[nu-1]=na;
			wnm[nu-1]=m;
			wnex[nu-1]=ex;
			wnc[nu-1]=c;
			wns[nu-1]=s;
		}
		else if(r=='r'){
			wrname[nu-1]=na;
			wrm[nu-1]=m;
			wrex[nu-1]=ex;
			wrc[nu-1]=c;
			wrs[nu-1]=s;
		}
		else if(r=='s'){
			wsname[nu-1]=na;
			wsm[nu-1]=m;
			wsex[nu-1]=ex;
			wsc[nu-1]=c;
			wss[nu-1]=s;
		}
	}
	else if(t=='t'){
		if(r=='n'){
			tnname[nu-1]=na;
			tnm[nu-1]=m;
			tnex[nu-1]=ex;
			tnc[nu-1]=c;
			tns[nu-1]=s;
		}
		else if(r=='r'){
			trname[nu-1]=na;
			trm[nu-1]=m;
			trex[nu-1]=ex;
			trc[nu-1]=c;
			trs[nu-1]=s;
		}
		else if(r=='s'){
			tsname[nu-1]=na;
			tsm[nu-1]=m;
			tsex[nu-1]=ex;
			tsc[nu-1]=c;
			tss[nu-1]=s;
		}
	}
	else if(t=='s'){
		if(r=='n'){
			snname[nu-1]=na;
			snm[nu-1]=m;
			snex[nu-1]=ex;
			snc[nu-1]=c;
			sns[nu-1]=s;
		}
		else if(r=='r'){
			srname[nu-1]=na;
			srm[nu-1]=m;
			srex[nu-1]=ex;
			src[nu-1]=c;
			srs[nu-1]=s;
		}
		else if(r=='s'){
			ssname[nu-1]=na;
			ssm[nu-1]=m;
			ssex[nu-1]=ex;
			ssc[nu-1]=c;
			sss[nu-1]=s;
		}
	}
}
function reroad(){
	location.reload(true);
}
function Bit(a,b){
	const c=a&b;
	return c;
}
function abo(a){
	if(a==15){
		if(ia==15) ia=0;
		else ia=15;
	}
	else{
		if(Bit(ia,a)) ia=ia-a;
		else ia=ia+a;
	}
	var st = document.getElementsByClassName('aty');
	var table = document.getElementsByClassName('taif');

	for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'white';
	for(var i=0;i<st.length;i++)st[i].style.display='none';

	table = document.getElementsByClassName('a15');
	//document.write('<br>'+a1+','+a2+','+a3+','+a4+','+a15);
	if(ia==15)for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
	
	for(var j=1;j<5;j++){
		st = document.getElementsByClassName('as'+j);
		table = document.getElementsByClassName('a'+j);
		if (Bit(ia,2**(j-1))){
		for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
		for(var i=0;i<st.length;i++)st[i].style.display='block';
	}
	}
	//document.write(ia);
}
function cbo(c){
	if(c==511){
		if(ic==511) ic=0;
		else ic=511;
	}
	else{
		if(Bit(ic,c)) ic=ic-c;
		else ic=ic+c;
	}
	//document.write(ic);
	/*0없음, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시(최고치 511(보여짐))
	*/
	//document.write(c1+','+c2+','+c3+','+c4+','+c5);
	
	var st = document.getElementsByClassName('cty');
	var table = document.getElementsByClassName('tcif');

	for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'white';
	for(var i=0;i<st.length;i++)st[i].style.display='none';

	table = document.getElementsByClassName('c511');
	if(ic == 511){
		for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
	}

	for(var j=1;j<10;j++){
		st = document.getElementsByClassName('cs'+j);
		table = document.getElementsByClassName('c'+j);
		if (Bit(ic,2**(j-1))){
			for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
			for(var i=0;i<st.length;i++)st[i].style.display='block';
			if (j==2){
				if(lc!=0){
					if(lc==2){
						st = document.getElementsByClassName('cs3');
						for(var i=0;i<st.length;i++)st[i].style.display='block';
					}
					else if(lc==3){
						st = document.getElementsByClassName('cs4');
						for(var i=0;i<st.length;i++)st[i].style.display='block';
					}
				}
			}
		}
		if(j==2)j=4;
	}
	//document.write(ia);
}

function sbo(s){
	if(s==8191){
		if(is==8191) is=0;
		else is=8191;
	}
	else{
		if(Bit(is,s)) is=is-s;
		else is=is+s;
	}
	//상승별 분류(선택시 보임)
	/*0없음, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수 (최고치 8191)
	*/ 
	//document.write(ic);
	//document.write(c1+','+c2+','+c3+','+c4+','+c5);
	var st = document.getElementsByClassName('sty');
	var table = document.getElementsByClassName('tsif');

	for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'white';
	for(var i=0;i<st.length;i++)st[i].style.display='none';

	table = document.getElementsByClassName('s8191');
	if(is == 8191){
		for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
	}
	for(var j=1;j<14;j++){
		st = document.getElementsByClassName('ss'+j);
		table = document.getElementsByClassName('s'+j);
		if (Bit(is,2**(j-1))){
			for(var i=0;i<table.length;i++)table[i].style.backgroundColor = 'rgb(255, 219, 151)';
			for(var i=0;i<st.length;i++)st[i].style.display='block';
		}
	}
	
	//document.write(ia);
}

function st(){
	document.write(ia+','+ic+','+is);
}
function P(){
	const nummx=pname.length;
	//document.write(nummx+"<br>");
	for (var num=1;num<=nummx;num++){
		prta('p',0,num,pname[num-1],0,pex[num-1],pc[num-1],ps[num-1],nummx);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}

function Wn(){
	const nummx=wnname.length;
	//document.write(nummx+"<br>");
	for (var num=1;num<=nummx;num++){
		prta('w','n',num,wnname[num-1],wnm[num-1],wnex[num-1],wnc[num-1],wns[num-1],wn[0]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}
function Wr(){
	const nummx=wrname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('w','r',num,wrname[num-1],wrm[num-1],wrex[num-1],wrc[num-1],wrs[num-1],wn[1]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}

function Ws(){
	const nummx=wsname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('w','s',num,wsname[num-1],wsm[num-1],wsex[num-1],wsc[num-1],wss[num-1],wn[2]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}

function Tn(){
	const nummx=tnname.length;
	//document.write(nummx+"<br>");
	for (var num=1;num<=nummx;num++){
		prta('t','n',num,tnname[num-1],tnm[num-1],tnex[num-1],tnc[num-1],tns[num-1],tn[0]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}
function Tr(){
	const nummx=trname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('t','r',num,trname[num-1],trm[num-1],trex[num-1],trc[num-1],trs[num-1],tn[1]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}

function Ts(){
	const nummx=tsname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('t','s',num,tsname[num-1],tsm[num-1],tsex[num-1],tsc[num-1],tss[num-1],tn[2]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}
function Sn(){
	const nummx=snname.length;
	//document.write(nummx+"<br>");
	for (var num=1;num<=nummx;num++){
		prta('s','n',num,snname[num-1],snm[num-1],snex[num-1],snc[num-1],sns[num-1],sn[0]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}
function Sr(){
	const nummx=srname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('s','r',num,srname[num-1],srm[num-1],srex[num-1],src[num-1],srs[num-1],sn[1]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}

function Ss(){
	const nummx=ssname.length;
	//document.write(nummx+",");
	for (var num=1;num<=nummx;num++){
		prta('s','s',num,ssname[num-1],ssm[num-1],ssex[num-1],ssc[num-1],sss[num-1],sn[2]);//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	}
	
}
function show(){
	//document.write(ia+','+ic+','+is);
	//document.write('<br>'+a1+','+a2+','+a3+','+a4);
	document.write('<div class="aty as1">');
	P();
	document.write('</div>');
	document.write('<div class="aty as2">');
	Wn();
    Wr();
    Ws();
	document.write('</div>');
	document.write('<div class="aty as3">');
	Tn();
    Tr();
    Ts();
	document.write('</div>');
	document.write('<div class="aty as4">');
	Sn();
    Sr();
    Ss();
	document.write('</div>');
}
  /*
function abu() {
	var table = document.getElementById('at');
	if (table.style.background = 'white') {
	  table.style.background = 'blue';
	} else {
	  table.style.display = 'none';
	}
  }
*/

function prta(t,r,nu,na,m,ex,c,s,tm){//종류,등급,들어갈 숫자, 이름, 비용, 내용, 조건,상승,해당 토탈 갯수 최대치
	//document.write(t+",");
	//document.write(cf+","+sf+'<br>');
	document.write("<div class='cty ");
	/*0없음, 1.기본 발사, 
	2.보조발사(무기,기술x)4.보조발사(무기 강화),8.보조발사(기술 강화),
	16기술1, 32기술2, 64궁극기, 128특수, 256상시(최고치 511(보여짐))
	*/
	for (var i=1;i<10;i++){
		if(Bit(c,2**(i-1)))document.write('cs'+i+' ');
	}
	document.write("'>");
	//document.write(c1+","+c2+","+c3+","+c4+","+c5+","+c6+","+c7+","+c8+","+c9);
	document.write("<div class='sty ");
	//상승별 분류
	/*0전체, 1.무기공격력, 2기술위력, 4.근접공격력, 8.치명타피해,
	16.공격속도, 32.이동속도, 64재사용시간감소, 128.재장전속도
	256.생명력, 512.무기 생명력 흡수, 1024.기술 생명력 흡수
	2048.탄약, 4096:특수
	*/
	for (var i=1;i<14;i++){
		if(Bit(s,2**(i-1)))document.write('ss'+i+' ');
	}
	document.write("'>");
	document.write('<table id="tatx">'); 
	document.write('<tr>'); //첫번째 줄
	document.write('<td id="pimg" rowspan="3">'); //첫번쨰 칸
	if (t=='p') document.write('<img id="allimg" src="./img/p-'+nu+'.png">');
	else if (nu<=tm)document.write('<img id="allimg" src="../img/'+t+'-'+r+nu+'.png">');
	else document.write('<img id="allimg" src="./img/'+t+'-'+r+nu+'.png">'); 
	document.write('</td>');
	if(t=='p')document.write('<td id="p" class="nm">'); 
	else document.write('<td id="'+r+'" class="nm">'); 
	document.write(na); //이름
	document.write('</td>');
	document.write('<td class="'+t+'t" id="tp">');
	if(t=='p')document.write('파워');
	if(t=='w')document.write('무기');
	if(t=='t')document.write('기술');
	if(t=='s')document.write('생존');
	document.write('</td>'); 
	document.write('<td class="ep" id="mo">');
	if(t=='p')document.write('1, 3, 5, 7 라운드');
	else document.write('비용: '+m);
	document.write('</td>'); 
	document.write('</tr>'); 
	document.write('<tr>');
	document.write('<td id="pex" colspan="3">'); 
	for(var i=0; i<ex.length; i++) document.write(ex[i]+"<br>");//내용
	document.write('</td>');
	document.write('</tr>');
	document.write('</table>');
	document.write('</div>');
	document.write('</div>');
}
