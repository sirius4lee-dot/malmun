// 말문 쉐도잉 — 기본 스크립트와 단어 뜻풀이
// 스크립트는 직접 작성한 원문입니다. lines: [영어, 한국어], phrases: [표현, 뜻]

window.SCRIPTS = [
  // ───────────── 30초 ─────────────
  {
    id: 's30a', level: '30s', title: 'Nice to Meet You', ko: '처음 만난 자리에서 자기소개',
    lines: [
      ["Hi, it's really nice to finally meet you in person.", "직접 만나게 되어 정말 반가워요."],
      ["I'm Jay, and I work in marketing at a tech company in Seoul.", "저는 제이고, 서울에 있는 IT 회사에서 마케팅 일을 해요."],
      ["I've been there for about five years now.", "거기서 일한 지 이제 5년 정도 됐어요."],
      ["In my free time, I like playing golf and trying new restaurants.", "시간 날 때는 골프 치는 것과 새로운 식당 가보는 걸 좋아해요."],
      ["To be honest, my English is a little rusty, so please bear with me.", "솔직히 영어가 좀 녹슬어서, 조금 양해 부탁드려요."],
      ["I'm really looking forward to working with you.", "함께 일하게 되어 정말 기대돼요."]
    ],
    phrases: [["in person", "직접 (만나서)"], ["a little rusty", "(실력이) 좀 녹슨"], ["bear with me", "조금만 기다려/양해해 주세요"], ["look forward to -ing", "~하는 것을 기대하다"]]
  },
  {
    id: 's30b', level: '30s', title: 'How Was Your Weekend?', ko: '주말 이야기 스몰토크',
    lines: [
      ["So, how was your weekend?", "그래서, 주말 어떻게 보냈어요?"],
      ["Mine was pretty relaxing.", "저는 꽤 여유롭게 보냈어요."],
      ["On Saturday, I went hiking with a couple of friends just outside the city.", "토요일에는 친구 몇 명이랑 도시 근교로 등산을 갔어요."],
      ["The weather was perfect, not too hot and not too cold.", "날씨가 딱 좋았어요, 너무 덥지도 춥지도 않고요."],
      ["On Sunday, I just stayed home and caught up on some sleep.", "일요일에는 그냥 집에서 밀린 잠을 잤어요."],
      ["What about you? Did you do anything fun?", "당신은요? 뭐 재밌는 거 했어요?"]
    ],
    phrases: [["a couple of", "두어 개의, 몇몇의"], ["just outside the city", "도시 바로 근교"], ["catch up on sleep", "밀린 잠을 자다"], ["What about you?", "당신은요?"]]
  },
  {
    id: 's30c', level: '30s', title: 'Sorry, Could You Say That Again?', ko: '못 알아들었을 때 되묻기',
    lines: [
      ["Sorry, could you say that again?", "죄송한데, 다시 한번 말씀해 주시겠어요?"],
      ["I didn't quite catch the last part.", "마지막 부분을 잘 못 알아들었어요."],
      ["Do you mean the meeting has been moved to Thursday?", "회의가 목요일로 옮겨졌다는 말씀이세요?"],
      ["Okay, got it. Thanks for clarifying.", "아, 알겠어요. 확실히 말씀해 주셔서 감사해요."],
      ["Sometimes people speak a little fast for me, so I like to double-check.", "가끔 사람들 말이 저한테 좀 빨라서, 다시 확인하는 편이에요."],
      ["I'd rather ask than guess and get it wrong.", "짐작했다가 틀리느니 물어보는 게 낫거든요."]
    ],
    phrases: [["I didn't catch that", "잘 못 알아들었어요"], ["Do you mean ...?", "~라는 뜻이에요?"], ["got it", "알겠어요"], ["double-check", "다시 확인하다"], ["I'd rather A than B", "B하느니 차라리 A하겠다"]]
  },

  // ───────────── 1분 ─────────────
  {
    id: 's1a', level: '1m', title: 'What I Do at Work', ko: '내가 하는 일 설명하기',
    lines: [
      ["Let me tell you a little bit about what I do.", "제가 하는 일에 대해 조금 말씀드릴게요."],
      ["I'm a project manager, so my main job is to keep everyone on the same page.", "저는 프로젝트 매니저라서, 주된 일은 모두가 같은 이해를 갖게 하는 거예요."],
      ["On a typical day, I start by checking emails and updating our schedule.", "보통 하루는 이메일을 확인하고 일정을 업데이트하는 걸로 시작해요."],
      ["Then I have a few meetings with different teams.", "그다음엔 여러 팀과 회의를 몇 개 해요."],
      ["Sometimes the designers and the engineers don't agree, and I have to help them find a middle ground.", "가끔 디자이너와 엔지니어 의견이 안 맞으면, 제가 절충점을 찾도록 도와야 해요."],
      ["It can be stressful, especially when deadlines are tight.", "스트레스받을 수 있어요, 특히 마감이 빠듯할 때요."],
      ["But I enjoy solving problems and watching a project come together.", "그래도 문제를 해결하고 프로젝트가 하나로 완성되어 가는 걸 보는 게 즐거워요."],
      ["The best part of my job is the people.", "제 일에서 가장 좋은 점은 사람들이에요."],
      ["I work with a lot of talented and funny colleagues.", "재능 있고 재밌는 동료들이 많거든요."],
      ["The hardest part is probably saying no to new requests when we're already busy.", "가장 힘든 건 아마 이미 바쁠 때 새 요청을 거절하는 거예요."],
      ["Overall, I'd say I really like what I do.", "전체적으로 보면, 제 일을 정말 좋아한다고 말할 수 있어요."]
    ],
    phrases: [["on the same page", "같은 생각을 공유하는"], ["a middle ground", "절충점, 타협점"], ["deadlines are tight", "마감이 빠듯하다"], ["come together", "(일이) 하나로 맞춰지다"], ["say no to", "~을 거절하다"]]
  },
  {
    id: 's1b', level: '1m', title: 'My Golf Obsession', ko: '골프에 빠진 이야기',
    lines: [
      ["I picked up golf about three years ago, and now I'm a little obsessed.", "3년 전쯤 골프를 시작했는데, 지금은 좀 빠져 있어요."],
      ["At first, I thought it would be easy, because the ball isn't even moving.", "처음엔 공이 움직이지도 않으니까 쉬울 줄 알았어요."],
      ["But it turned out to be one of the hardest sports I've ever tried.", "그런데 알고 보니 제가 해본 운동 중에 가장 어려운 것 중 하나였어요."],
      ["My driver is getting better, but my short game still needs a lot of work.", "드라이버는 나아지고 있는데, 숏게임은 아직 연습이 많이 필요해요."],
      ["I usually go to a screen golf place after work, maybe twice a week.", "보통 퇴근 후에 스크린 골프장에 가요, 일주일에 두 번 정도요."],
      ["It's really popular in Korea.", "한국에서 정말 인기가 많아요."],
      ["You hit real balls into a big screen, and it shows you the course and all your stats.", "큰 스크린에 진짜 공을 치면, 코스와 모든 기록을 보여줘요."],
      ["On weekends, I sometimes play a real round with friends.", "주말에는 가끔 친구들이랑 필드에서 한 라운드 쳐요."],
      ["We have to get up really early, like four in the morning, to make our tee time.", "티타임에 맞추려면 새벽 네 시쯤 정말 일찍 일어나야 해요."],
      ["It's exhausting, but being outside on a beautiful course makes it worth it.", "피곤하지만, 아름다운 코스에 나가 있으면 그럴 만한 가치가 있어요."]
    ],
    phrases: [["pick up", "(취미를) 시작하다, 배우다"], ["be obsessed", "푹 빠지다"], ["turn out to be", "알고 보니 ~이다"], ["need a lot of work", "연습이 많이 필요하다"], ["make it worth it", "그만한 가치가 있게 하다"]]
  },
  {
    id: 's1c', level: '1m', title: 'Showing a Friend Around Seoul', ko: '외국인 친구에게 서울 안내하기',
    lines: [
      ["If you're visiting Seoul for the first time, I'd start with the old palaces.", "서울에 처음 오시면, 저라면 고궁부터 시작할 거예요."],
      ["The biggest one is right in the middle of the city, so it's easy to find.", "가장 큰 곳이 도심 한가운데 있어서 찾기 쉬워요."],
      ["If you wear traditional Korean clothes, you can even get in for free.", "한복을 입으면 무료로 들어갈 수도 있어요."],
      ["After that, you can walk to a nearby neighborhood full of traditional houses.", "그다음엔 한옥이 가득한 근처 동네로 걸어갈 수 있어요."],
      ["In the evening, head over to the river.", "저녁에는 강으로 가 보세요."],
      ["A lot of people sit by the river, order fried chicken, and just relax.", "많은 사람들이 강가에 앉아서 치킨을 시켜 놓고 그냥 쉬어요."],
      ["Getting around is easy, because the subway is clean, cheap, and goes almost everywhere.", "지하철이 깨끗하고 싸고 거의 모든 곳에 가서 돌아다니기 쉬워요."],
      ["Just make sure you download a local map app, because some global ones don't work very well here.", "다만 현지 지도 앱은 꼭 받으세요, 해외 앱 중 일부는 여기서 잘 안 되거든요."],
      ["And don't leave without trying the street food at a traditional market.", "그리고 전통시장 길거리 음식은 꼭 먹어 보고 가세요."]
    ],
    phrases: [["get in for free", "무료로 입장하다"], ["head over to", "~로 가다"], ["get around", "돌아다니다"], ["make sure", "꼭 ~하도록 하다"], ["don't leave without -ing", "~하지 않고는 떠나지 마세요"]]
  },

  // ───────────── 2분 ─────────────
  {
    id: 's2a', level: '2m', title: 'The Day I Missed My Flight', ko: '비행기를 놓친 날 (경험 이야기)',
    lines: [
      ["Let me tell you about the worst travel day I've ever had.", "제가 겪은 최악의 여행 날 이야기를 해 드릴게요."],
      ["A few years ago, I was flying from Seoul to Barcelona for a friend's wedding.", "몇 년 전에 친구 결혼식 때문에 서울에서 바르셀로나로 가는 비행기를 탔어요."],
      ["I had a connecting flight in Paris, and the layover was only an hour and a half.", "파리에서 환승이 있었는데, 경유 시간이 겨우 한 시간 반이었어요."],
      ["I thought that would be plenty of time.", "그 정도면 충분하다고 생각했죠."],
      ["Unfortunately, our first flight took off almost an hour late because of bad weather.", "안타깝게도 첫 비행기가 악천후 때문에 거의 한 시간 늦게 이륙했어요."],
      ["By the time we landed, I had about twenty minutes to get to the next gate.", "착륙했을 때는 다음 게이트까지 갈 시간이 20분 정도밖에 없었어요."],
      ["I ran through the airport like a crazy person, but the gate was on the other side of the terminal.", "미친 사람처럼 공항을 뛰었지만, 게이트가 터미널 반대편에 있었어요."],
      ["When I finally got there, the doors were already closed.", "마침내 도착했을 때는 이미 문이 닫혀 있었어요."],
      ["I was so frustrated that I almost cried.", "너무 답답해서 거의 울 뻔했어요."],
      ["The staff told me the next available flight was the following morning.", "직원이 다음 이용 가능한 비행기는 다음 날 아침이라고 했어요."],
      ["That meant I would miss the welcome dinner the night before the wedding.", "그 말은 결혼식 전날 밤 환영 만찬을 놓친다는 뜻이었죠."],
      ["But then something nice happened.", "그런데 그때 좋은 일이 생겼어요."],
      ["The airline gave me a free hotel room and a meal voucher.", "항공사가 무료 호텔 방과 식사 쿠폰을 줬어요."],
      ["I ended up having a quiet evening walking around Paris, which I had never planned to see.", "결국 계획에도 없던 파리를 걸으며 조용한 저녁을 보내게 됐어요."],
      ["I made it to the wedding the next day, tired but happy.", "다음 날 결혼식엔 피곤했지만 행복하게 도착했어요."],
      ["Now, whenever I book a trip, I always leave at least three hours between flights.", "이제 여행을 예약할 때마다 비행기 사이에 항상 최소 세 시간은 둬요."],
      ["And honestly, I think of that night in Paris as a small gift.", "그리고 솔직히, 파리에서의 그 밤을 작은 선물처럼 생각해요."]
    ],
    phrases: [["connecting flight", "환승 항공편"], ["layover", "경유 대기 시간"], ["take off", "이륙하다"], ["by the time", "~할 때쯤에는"], ["end up -ing", "결국 ~하게 되다"], ["make it to", "~에 (제때) 도착하다"]]
  },
  {
    id: 's2b', level: '2m', title: 'Working From Home: Yes or No?', ko: '재택근무에 대한 내 생각 (의견 말하기)',
    lines: [
      ["People often ask me whether I prefer working from home or working in the office.", "사람들이 저한테 재택근무가 좋은지 사무실 근무가 좋은지 자주 물어봐요."],
      ["My honest answer is that I like a mix of both.", "솔직한 대답은 둘을 섞은 게 좋다는 거예요."],
      ["Working from home has some clear advantages.", "재택근무엔 분명한 장점이 있어요."],
      ["I don't have to spend an hour on a crowded subway every morning.", "매일 아침 붐비는 지하철에서 한 시간을 보낼 필요가 없어요."],
      ["I can focus better when I need to write a report or think through a difficult problem.", "보고서를 쓰거나 어려운 문제를 곰곰이 생각해야 할 때 더 집중이 잘 돼요."],
      ["I can also take a short walk at lunch or cook a proper meal.", "점심에 잠깐 산책하거나 제대로 된 식사를 요리할 수도 있고요."],
      ["On the other hand, it can get lonely.", "반면에 외로울 수 있어요."],
      ["When I work from home for too many days in a row, I start to feel disconnected from my team.", "너무 여러 날 연속으로 재택을 하면 팀과 단절된 느낌이 들기 시작해요."],
      ["Small conversations by the coffee machine actually matter a lot.", "커피 머신 옆에서의 짧은 대화가 사실 정말 중요해요."],
      ["That's often where new ideas come from, and where you build trust with people.", "새로운 아이디어가 나오고, 사람들과 신뢰를 쌓는 곳이 바로 거기인 경우가 많거든요."],
      ["It's also much easier to solve a problem quickly when you can just walk over to someone's desk.", "누군가의 자리로 그냥 걸어갈 수 있으면 문제를 빨리 해결하기도 훨씬 쉽고요."],
      ["So for me, the ideal schedule is about two or three days in the office and the rest at home.", "그래서 저에게 이상적인 일정은 사무실 2~3일, 나머지는 집이에요."],
      ["I use office days for meetings and teamwork, and home days for deep focus.", "사무실 날은 회의와 팀워크에, 집에서 일하는 날은 깊은 집중에 써요."],
      ["Of course, it depends on the job and the person.", "물론 직업과 사람에 따라 달라요."],
      ["But I think companies that offer this kind of flexibility will attract better people.", "하지만 이런 유연성을 제공하는 회사가 더 좋은 사람들을 끌어들일 거라고 생각해요."]
    ],
    phrases: [["a mix of both", "둘을 섞은 것"], ["think through", "곰곰이 생각하다"], ["on the other hand", "반면에"], ["in a row", "연속으로"], ["feel disconnected", "단절감을 느끼다"], ["it depends on", "~에 달려 있다"]]
  },

  // ───────────── 3분 ─────────────
  {
    id: 's3a', level: '3m', title: 'Kicking Off a Meeting', ko: '회의 시작하고 이끌기 (발표)',
    lines: [
      ["Good morning, everyone, and thanks for joining on such short notice.", "좋은 아침입니다, 여러분. 급하게 잡은 회의인데 참석해 주셔서 감사합니다."],
      ["I know you're all busy, so I'll try to keep this to thirty minutes.", "다들 바쁘신 거 알아서, 30분 안에 끝내도록 하겠습니다."],
      ["The goal of today's meeting is to agree on a plan for the product launch next quarter.", "오늘 회의 목표는 다음 분기 제품 출시 계획에 합의하는 겁니다."],
      ["I'd like to cover three things.", "세 가지를 다루고 싶습니다."],
      ["First, I'll give you a quick update on where we are right now.", "첫째, 현재 진행 상황을 빠르게 공유하겠습니다."],
      ["Second, we'll look at the biggest risks we've found so far.", "둘째, 지금까지 발견한 가장 큰 리스크들을 살펴보겠습니다."],
      ["And finally, I'd like us to decide on the next steps and who's responsible for each one.", "마지막으로, 다음 단계와 각 단계의 담당자를 정했으면 합니다."],
      ["So let's start with the update.", "그럼 진행 상황부터 시작하죠."],
      ["The good news is that development is mostly on track.", "좋은 소식은 개발이 대체로 순조롭다는 겁니다."],
      ["The core features are finished, and testing started last week.", "핵심 기능은 완성됐고, 테스트는 지난주에 시작했습니다."],
      ["The early feedback from our test users has been very positive.", "테스트 사용자들의 초기 피드백이 매우 긍정적입니다."],
      ["They especially liked how simple the setup process is.", "특히 설정 과정이 간단하다는 점을 좋아했어요."],
      ["However, there are a couple of issues we need to talk about.", "하지만 논의해야 할 문제가 두어 가지 있습니다."],
      ["The first one is performance.", "첫 번째는 성능입니다."],
      ["On older phones, the app takes too long to load, sometimes more than five seconds.", "오래된 폰에서는 앱 로딩이 너무 오래 걸리고, 가끔은 5초가 넘습니다."],
      ["That might not sound like much, but many users will give up before it even opens.", "별거 아닌 것처럼 들릴 수 있지만, 많은 사용자가 앱이 열리기도 전에 포기할 겁니다."],
      ["The second issue is the marketing budget.", "두 번째 문제는 마케팅 예산입니다."],
      ["We originally planned a big campaign, but the budget has been cut by about twenty percent.", "원래 대규모 캠페인을 계획했는데, 예산이 약 20% 삭감됐습니다."],
      ["So we need to figure out where to focus our spending.", "그래서 어디에 비용을 집중할지 정해야 합니다."],
      ["My suggestion is to delay the launch by two weeks to fix the performance problem.", "제 제안은 성능 문제를 고치기 위해 출시를 2주 미루는 겁니다."],
      ["I know that's not what anyone wants to hear.", "아무도 듣고 싶지 않은 얘기라는 거 압니다."],
      ["But launching a slow product would hurt us more in the long run.", "하지만 느린 제품을 출시하면 장기적으로 더 큰 손해가 될 겁니다."],
      ["For marketing, I think we should focus on online channels, where we can measure results more easily.", "마케팅은 결과를 더 쉽게 측정할 수 있는 온라인 채널에 집중해야 한다고 생각합니다."],
      ["Before we make any decisions, I'd love to hear what you all think.", "결정하기 전에 여러분의 생각을 듣고 싶습니다."],
      ["Does anyone have any concerns or a different idea?", "우려되는 점이나 다른 아이디어 있으신 분 계신가요?"],
      ["Please feel free to jump in.", "편하게 말씀해 주세요."]
    ],
    phrases: [["on short notice", "급하게, 갑작스럽게"], ["keep this to ~", "~ 이내로 끝내다"], ["on track", "순조롭게 진행 중인"], ["figure out", "알아내다, 정하다"], ["in the long run", "장기적으로"], ["feel free to", "편하게 ~하세요"], ["jump in", "(대화에) 끼어들다"]]
  },
  {
    id: 's3b', level: '3m', title: "How I'm Learning to Speak", ko: '영어 말하기를 배우는 중 (내 이야기)',
    lines: [
      ["I studied English for more than ten years in school, but I still freeze when someone talks to me.", "학교에서 10년 넘게 영어를 공부했는데, 누가 말을 걸면 아직도 얼어붙어요."],
      ["For a long time, I couldn't understand why.", "오랫동안 그 이유를 이해할 수 없었어요."],
      ["I knew thousands of words, and I could read long articles without much trouble.", "단어도 수천 개 알고, 긴 기사도 별 어려움 없이 읽을 수 있었거든요."],
      ["But reading and speaking are completely different skills.", "하지만 읽기와 말하기는 완전히 다른 기술이에요."],
      ["When you read, you can take your time.", "읽을 때는 천천히 시간을 들일 수 있어요."],
      ["When you speak, you have to find the right words in a second, while the other person is waiting.", "말할 때는 상대가 기다리는 동안 순식간에 맞는 단어를 찾아야 해요."],
      ["I realized that my brain had never practiced that.", "제 뇌가 그걸 한 번도 연습해 본 적이 없다는 걸 깨달았어요."],
      ["So this year, I changed my approach.", "그래서 올해 방법을 바꿨어요."],
      ["Instead of memorizing word lists, I started shadowing.", "단어장을 외우는 대신 쉐도잉을 시작했어요."],
      ["I listen to a short piece of natural English and repeat it out loud, right after the speaker.", "짧은 자연스러운 영어를 듣고, 말하는 사람 바로 뒤에서 소리 내어 따라 해요."],
      ["At first, I felt silly talking to myself.", "처음엔 혼잣말하는 게 좀 바보 같았어요."],
      ["My mouth couldn't keep up, and I kept stumbling over the same words.", "입이 따라가지 못하고, 같은 단어에서 계속 더듬었어요."],
      ["But after a couple of weeks, something started to change.", "하지만 두어 주가 지나자 뭔가 바뀌기 시작했어요."],
      ["Phrases I had repeated many times began to come out naturally.", "여러 번 반복한 표현들이 자연스럽게 나오기 시작했어요."],
      ["In a meeting last month, I said, let me think that through, without even planning it.", "지난달 회의에서 계획하지도 않았는데 \"let me think that through\"라고 말했어요."],
      ["It was a small moment, but it felt like a big win.", "작은 순간이었지만 큰 승리처럼 느껴졌어요."],
      ["Now I practice for about twenty minutes every day, usually on my way to work.", "지금은 매일 20분 정도, 보통 출근길에 연습해요."],
      ["I start with short scripts, and once I can say one smoothly, I move on to a longer one.", "짧은 스크립트로 시작해서, 하나를 매끄럽게 말할 수 있게 되면 더 긴 걸로 넘어가요."],
      ["I also record myself, which is a little painful to listen to.", "제 목소리를 녹음도 하는데, 듣기가 좀 괴로워요."],
      ["But it shows me exactly where I make mistakes.", "하지만 어디서 실수하는지 정확히 보여줘요."],
      ["My goal isn't to sound like a native speaker.", "제 목표는 원어민처럼 들리는 게 아니에요."],
      ["I just want to be able to have a relaxed conversation without panicking.", "그냥 당황하지 않고 편하게 대화할 수 있으면 좋겠어요."],
      ["If you're in the same situation, my advice is simple.", "같은 상황이시라면 제 조언은 간단해요."],
      ["Stop waiting until you feel ready, and start speaking today, even if it's only to yourself.", "준비됐다고 느낄 때까지 기다리지 말고, 혼잣말이라도 오늘부터 말하기 시작하세요."]
    ],
    phrases: [["freeze", "얼어붙다"], ["take your time", "천천히 하다"], ["out loud", "소리 내어"], ["keep up", "(속도를) 따라가다"], ["stumble over", "~에서 더듬거리다"], ["move on to", "~로 넘어가다"], ["a big win", "큰 성과"]]
  },

  // ───────────── 5분 ─────────────
  {
    id: 's5a', level: '5m', title: 'A Day in My Life', ko: '나의 평범한 하루 (일상 묘사)',
    lines: [
      ["I want to walk you through a typical weekday in my life.", "제 평범한 평일 하루를 차근차근 보여 드릴게요."],
      ["It's not very exciting, but it's a good way to practice everyday English.", "별로 흥미진진하진 않지만, 일상 영어를 연습하기엔 좋은 방법이에요."],
      ["My alarm goes off at six thirty every morning.", "제 알람은 매일 아침 6시 30분에 울려요."],
      ["I'd love to say I jump out of bed, but the truth is I usually hit snooze at least once.", "벌떡 일어난다고 말하고 싶지만, 사실은 보통 스누즈를 최소 한 번은 눌러요."],
      ["When I finally get up, the first thing I do is drink a big glass of water.", "마침내 일어나면 제일 먼저 물을 큰 컵으로 한 잔 마셔요."],
      ["Then I make coffee and check the news on my phone for a few minutes.", "그다음 커피를 내리고 몇 분 동안 휴대폰으로 뉴스를 확인해요."],
      ["I try not to look at work emails before breakfast, but I'm not always successful.", "아침 먹기 전엔 업무 이메일을 안 보려고 하지만, 항상 성공하진 못해요."],
      ["Breakfast is usually simple, like toast and eggs, or a bowl of yogurt with fruit.", "아침은 보통 토스트와 계란, 아니면 과일을 넣은 요거트 한 그릇처럼 간단해요."],
      ["After a quick shower, I get dressed and leave the house around seven forty.", "빠르게 샤워한 뒤 옷을 입고 7시 40분쯤 집을 나서요."],
      ["My commute takes about forty minutes by subway.", "출근은 지하철로 40분 정도 걸려요."],
      ["The trains are always packed in the morning, so I rarely get a seat.", "아침엔 열차가 늘 꽉 차서 앉을 일이 거의 없어요."],
      ["I use that time to listen to podcasts or practice my English shadowing.", "그 시간에 팟캐스트를 듣거나 영어 쉐도잉을 연습해요."],
      ["Sometimes people look at me strangely when I mumble along, but I've stopped caring.", "제가 중얼중얼 따라 하면 가끔 사람들이 이상하게 쳐다보지만, 이젠 신경 안 써요."],
      ["I get to the office a little before nine.", "9시 조금 전에 사무실에 도착해요."],
      ["The first hour is my favorite part of the day, because it's still quiet.", "첫 한 시간이 하루 중 제일 좋아하는 시간이에요, 아직 조용하거든요."],
      ["I make a list of the three most important things I need to finish.", "끝내야 할 가장 중요한 세 가지 목록을 만들어요."],
      ["If I only get those three things done, I consider the day a success.", "그 세 가지만 끝내도 그날은 성공이라고 생각해요."],
      ["From ten o'clock, the meetings begin.", "10시부터 회의가 시작돼요."],
      ["On busy days, I can have five or six meetings back to back.", "바쁜 날엔 회의가 대여섯 개 연달아 있을 수도 있어요."],
      ["Some of them are really useful, and some of them honestly could have been an email.", "어떤 건 정말 유용하고, 어떤 건 솔직히 이메일로 충분했을 거예요."],
      ["Lunch is at twelve thirty, and I usually eat with my coworkers.", "점심은 12시 반이고, 보통 동료들이랑 먹어요."],
      ["There are a lot of restaurants near our building, so we take turns choosing.", "건물 근처에 식당이 많아서 돌아가면서 골라요."],
      ["My favorite is a small place that sells spicy noodle soup.", "제가 제일 좋아하는 곳은 매운 국수를 파는 작은 가게예요."],
      ["After lunch, we often grab a coffee and take a short walk around the block.", "점심 후엔 자주 커피를 사서 근처를 잠깐 걸어요."],
      ["That walk really helps me stay awake in the afternoon.", "그 산책이 오후에 졸지 않는 데 정말 도움이 돼요."],
      ["The afternoon is when I do most of my focused work.", "오후는 집중해야 하는 일을 대부분 하는 시간이에요."],
      ["I put on my headphones, turn off notifications, and try to get into a flow.", "헤드폰을 끼고 알림을 끄고 몰입하려고 해요."],
      ["Of course, someone always needs something urgent around four o'clock.", "물론 4시쯤이면 꼭 누군가 급한 일이 생겨요."],
      ["I try to stay flexible, because that's just part of the job.", "그것도 일의 일부라서 유연하게 대처하려고 해요."],
      ["I usually leave work at around six thirty.", "보통 6시 반쯤 퇴근해요."],
      ["Twice a week, I go straight to the screen golf place near my office to practice my swing.", "일주일에 두 번은 회사 근처 스크린 골프장으로 바로 가서 스윙 연습을 해요."],
      ["On other days, I head home and cook something easy for dinner.", "다른 날에는 집에 가서 간단한 저녁을 해 먹어요."],
      ["I'm not a great cook, but I can make a pretty good kimchi fried rice.", "요리를 잘하진 못하지만 김치볶음밥은 꽤 잘 만들어요."],
      ["After dinner, I try to spend at least an hour without looking at a screen.", "저녁을 먹고 나면 최소 한 시간은 화면을 안 보려고 해요."],
      ["I read a book, stretch, or call my parents to see how they're doing.", "책을 읽거나 스트레칭을 하거나 부모님께 안부 전화를 드려요."],
      ["My mom always asks if I'm eating well, no matter how old I get.", "엄마는 제가 몇 살이 되든 밥은 잘 먹고 다니냐고 항상 물어보세요."],
      ["Before bed, I spend about ten minutes reviewing the English phrases I practiced that day.", "자기 전에 그날 연습한 영어 표현을 10분 정도 복습해요."],
      ["I say them out loud one more time, and I check the words I starred.", "한 번 더 소리 내어 말해 보고, 별표 친 단어를 확인해요."],
      ["It's a small habit, but it adds up over weeks and months.", "작은 습관이지만 몇 주, 몇 달이 지나면 쌓여요."],
      ["I try to be in bed by eleven thirty, because I know I'll be miserable the next day if I'm not.", "11시 반까지는 잠자리에 들려고 해요, 안 그러면 다음 날 괴로울 걸 알거든요."],
      ["So that's my typical day.", "이게 제 평범한 하루예요."],
      ["It's busy and a little repetitive, but there are small things in it that I really enjoy.", "바쁘고 좀 반복적이지만, 그 안에 정말 즐기는 작은 것들이 있어요."],
      ["What does a normal day look like for you?", "당신의 평범한 하루는 어떤가요?"]
    ],
    phrases: [["walk you through", "차근차근 설명하다"], ["go off", "(알람이) 울리다"], ["hit snooze", "스누즈를 누르다"], ["commute", "통근, 출퇴근"], ["packed", "꽉 찬"], ["back to back", "연달아"], ["take turns", "돌아가면서 하다"], ["get into a flow", "몰입하다"], ["add up", "쌓이다"]]
  },

  // ───────────── 10분 ─────────────
  {
    id: 's10a', level: '10m', title: 'Small Habits, Big Changes', ko: '작은 습관이 만든 큰 변화 (스피치)',
    lines: [
      ["Good evening, everyone.", "안녕하세요, 여러분."],
      ["Thank you for having me here tonight.", "오늘 밤 이 자리에 초대해 주셔서 감사합니다."],
      ["I want to talk about something that sounds boring but completely changed my life, and that's small habits.", "지루하게 들리지만 제 인생을 완전히 바꾼 것, 바로 작은 습관에 대해 이야기하고 싶습니다."],
      ["Five years ago, I was not in a good place.", "5년 전, 저는 좋은 상태가 아니었어요."],
      ["I was working long hours at a job I didn't enjoy.", "즐겁지 않은 직장에서 오랜 시간 일하고 있었죠."],
      ["I was sleeping badly, eating badly, and spending most of my free time scrolling on my phone.", "잠도 잘 못 자고, 식사도 엉망이고, 여가 시간 대부분을 휴대폰 스크롤하며 보냈어요."],
      ["Every January, I made big promises to myself.", "매년 1월이면 스스로에게 거창한 약속을 했어요."],
      ["This year, I'll go to the gym every day.", "올해는 매일 헬스장에 갈 거야."],
      ["This year, I'll read fifty books.", "올해는 책을 50권 읽을 거야."],
      ["This year, I'll finally learn to speak English.", "올해는 드디어 영어 말하기를 배울 거야."],
      ["And every February, I had already given up.", "그리고 매년 2월이면 이미 포기해 있었죠."],
      ["I thought the problem was that I didn't have enough willpower.", "저는 의지력이 부족한 게 문제라고 생각했어요."],
      ["I thought other people were simply more disciplined than me.", "다른 사람들이 그냥 저보다 더 절제력이 있다고 생각했죠."],
      ["But then I read something that changed the way I thought about it.", "그런데 그 생각을 바꾼 글을 읽게 됐어요."],
      ["The idea was simple.", "아이디어는 단순했어요."],
      ["If you want to change your life, don't start with big goals.", "인생을 바꾸고 싶다면 큰 목표로 시작하지 마라."],
      ["Start with habits so small that they feel almost silly.", "거의 우스울 만큼 작은 습관으로 시작하라."],
      ["Instead of going to the gym for an hour, do two push-ups.", "헬스장에서 한 시간 운동하는 대신 팔굽혀펴기 두 개를 해라."],
      ["Instead of reading fifty books, read one page before bed.", "책 50권 대신 자기 전에 한 페이지를 읽어라."],
      ["Instead of studying English for two hours, say one sentence out loud.", "영어를 두 시간 공부하는 대신 문장 하나를 소리 내어 말해라."],
      ["When I first heard this, I didn't believe it.", "처음 이 얘기를 들었을 땐 믿지 않았어요."],
      ["Two push-ups? What's the point?", "팔굽혀펴기 두 개? 그게 무슨 의미가 있어?"],
      ["But I was desperate, so I decided to try.", "하지만 절박했기에 해 보기로 했어요."],
      ["The first habit I chose was drinking a glass of water right after I woke up.", "처음 고른 습관은 일어나자마자 물 한 잔 마시기였어요."],
      ["That's it. Just one glass of water.", "그게 다예요. 물 딱 한 잔."],
      ["I put a glass next to my bed every night so I couldn't forget.", "잊지 않도록 매일 밤 침대 옆에 컵을 놓아뒀어요."],
      ["It took almost no effort, and after two weeks, I was doing it without thinking.", "거의 노력이 들지 않았고, 2주 뒤엔 생각 없이 하고 있었어요."],
      ["That small success gave me a little confidence.", "그 작은 성공이 저에게 약간의 자신감을 줬어요."],
      ["So I added another habit.", "그래서 습관을 하나 더 추가했죠."],
      ["After drinking my water, I would do two push-ups.", "물을 마신 뒤엔 팔굽혀펴기 두 개를 하기로요."],
      ["Some days, I did two and stopped.", "어떤 날은 두 개 하고 멈췄어요."],
      ["But most days, once I was on the floor, I thought, well, I might as well do ten.", "하지만 대부분의 날은 일단 바닥에 엎드리면, 뭐 열 개쯤 하는 게 낫겠다 싶었어요."],
      ["This is the secret that nobody tells you.", "이게 아무도 말해 주지 않는 비밀이에요."],
      ["The hardest part of any habit is starting.", "어떤 습관이든 가장 어려운 건 시작이에요."],
      ["If you make the start easy enough, the rest often takes care of itself.", "시작을 충분히 쉽게 만들면, 나머지는 대개 알아서 해결돼요."],
      ["Over the next few months, I kept adding tiny habits, one at a time.", "그 후 몇 달 동안 작은 습관을 하나씩 계속 추가했어요."],
      ["I read one page of a book before bed.", "자기 전에 책 한 페이지를 읽었어요."],
      ["I wrote down one thing I was grateful for each day.", "매일 감사한 일 하나를 적었어요."],
      ["I left my phone in the kitchen when I went to sleep.", "잘 때 휴대폰을 부엌에 두었어요."],
      ["None of these things felt like a big deal.", "이 중 어느 것도 대단한 일로 느껴지지 않았어요."],
      ["But after a year, I looked back and barely recognized my old life.", "하지만 1년 뒤 돌아보니 예전 삶을 거의 알아볼 수 없을 정도였어요."],
      ["I had read more than twenty books, one page at a time.", "한 페이지씩 읽어서 20권 넘게 읽었더라고요."],
      ["I was sleeping better, because my phone wasn't next to my head anymore.", "휴대폰이 더 이상 머리맡에 없어서 잠도 더 잘 잤고요."],
      ["I had more energy, and I felt more in control of my day.", "에너지도 많아지고, 하루를 더 잘 통제하는 느낌이었어요."],
      ["Now, I want to share three lessons I learned along the way.", "이제 그 과정에서 배운 세 가지 교훈을 나누고 싶어요."],
      ["The first lesson is to make it so easy that you can't say no.", "첫 번째 교훈은 거절할 수 없을 만큼 쉽게 만들라는 거예요."],
      ["Most of us fail because we set the bar too high on the first day.", "우리 대부분은 첫날 기준을 너무 높게 잡아서 실패해요."],
      ["We want to see results quickly, so we try to do too much, and we burn out.", "결과를 빨리 보고 싶어서 너무 많이 하려다 지쳐 버리죠."],
      ["A habit you do every day for one minute is far more powerful than a habit you do once for three hours.", "매일 1분 하는 습관이 한 번 세 시간 하는 습관보다 훨씬 강력해요."],
      ["The second lesson is to attach new habits to old ones.", "두 번째 교훈은 새 습관을 기존 습관에 붙이라는 거예요."],
      ["I didn't just decide to do push-ups at some random time.", "저는 아무 때나 팔굽혀펴기를 하기로 한 게 아니었어요."],
      ["I did them right after drinking my water, which I was already doing every morning.", "이미 매일 아침 하고 있던 물 마시기 바로 뒤에 했죠."],
      ["The old habit becomes a reminder for the new one.", "기존 습관이 새 습관을 떠올리게 하는 신호가 돼요."],
      ["After I pour my coffee, I'll review five English phrases.", "커피를 따르고 나면 영어 표현 다섯 개를 복습한다."],
      ["After I sit down on the subway, I'll listen to one short recording and repeat it.", "지하철에 앉으면 짧은 녹음 하나를 듣고 따라 한다."],
      ["When you link habits like this, you don't have to rely on memory or motivation.", "이렇게 습관을 연결하면 기억이나 동기에 의존할 필요가 없어요."],
      ["The third lesson is the most important one.", "세 번째 교훈이 가장 중요해요."],
      ["Don't break the chain twice.", "사슬을 두 번 끊지 마세요."],
      ["Everyone misses a day sometimes.", "누구나 가끔 하루를 빼먹어요."],
      ["You get sick, you travel, or you just have a terrible day.", "아프거나, 여행을 가거나, 그냥 최악의 하루를 보낼 때도 있죠."],
      ["That's normal, and it's not a problem.", "그건 정상이고, 문제가 아니에요."],
      ["The problem is when one missed day turns into two, and two turns into a week.", "문제는 하루 빠진 게 이틀이 되고, 이틀이 일주일이 될 때예요."],
      ["So my rule is simple. I can miss once, but never twice in a row.", "그래서 제 규칙은 간단해요. 한 번은 빠져도 되지만, 두 번 연속은 절대 안 된다."],
      ["Even on my worst days, I do the smallest version of my habit.", "최악의 날에도 습관의 가장 작은 버전은 해요."],
      ["One push-up. One page. One sentence.", "팔굽혀펴기 하나. 한 페이지. 한 문장."],
      ["It keeps the habit alive until I'm ready to do more.", "더 할 준비가 될 때까지 습관을 살려 두는 거죠."],
      ["Let me give you a real example from my own life.", "제 삶의 실제 예를 하나 들어 볼게요."],
      ["For years, I was embarrassed about my English.", "몇 년 동안 저는 제 영어가 부끄러웠어요."],
      ["I could read it well, but whenever I had to speak, my mind went blank.", "읽기는 잘했지만, 말해야 할 때마다 머리가 하얘졌어요."],
      ["I avoided calls with our overseas partners, and I let my coworkers do the talking.", "해외 파트너와의 통화를 피했고, 말하는 건 동료들에게 맡겼죠."],
      ["So I applied the same idea.", "그래서 같은 아이디어를 적용했어요."],
      ["Every morning on the subway, I shadowed one short script, just thirty seconds long.", "매일 아침 지하철에서 30초짜리 짧은 스크립트 하나를 쉐도잉했어요."],
      ["When I could say it without looking, I moved on to a one-minute script, then two, then five.", "안 보고 말할 수 있게 되면 1분짜리로, 그다음 2분, 그다음 5분으로 넘어갔어요."],
      ["It was slow, and for the first month, I didn't notice any difference.", "느렸고, 첫 달에는 아무 차이도 못 느꼈어요."],
      ["But six months later, I volunteered to lead a meeting in English.", "하지만 6개월 뒤, 영어 회의를 진행하겠다고 자원했어요."],
      ["My hands were shaking a little, but the words came out.", "손이 조금 떨렸지만 말이 나왔어요."],
      ["Not perfectly, but clearly enough that everyone understood me.", "완벽하진 않았지만 모두가 알아들을 만큼 명확했어요."],
      ["After the meeting, my manager said, I didn't know you could do that.", "회의 후에 매니저가 \"네가 이렇게 할 수 있는 줄 몰랐어\"라고 했어요."],
      ["Honestly, neither did I.", "솔직히 저도 몰랐어요."],
      ["I'm not telling you this because I'm special.", "제가 특별해서 이 얘기를 하는 게 아니에요."],
      ["I'm telling you because I'm not.", "특별하지 않아서 하는 거예요."],
      ["I'm a regular person with a busy job and not much free time.", "저는 바쁜 직장에 여가도 별로 없는 평범한 사람이에요."],
      ["If small habits could change my life, they can change yours too.", "작은 습관이 제 삶을 바꿀 수 있었다면, 당신의 삶도 바꿀 수 있어요."],
      ["So here's my challenge for you.", "그래서 여러분께 도전 과제를 드릴게요."],
      ["Tonight, before you go to sleep, think of one thing you've been wanting to change.", "오늘 밤 잠들기 전에, 바꾸고 싶었던 것 하나를 떠올려 보세요."],
      ["Then make it smaller.", "그리고 그걸 더 작게 만드세요."],
      ["Then make it even smaller, until it feels almost too easy.", "그리고 거의 너무 쉽다고 느껴질 때까지 더 작게 만드세요."],
      ["Start tomorrow morning, and don't worry about results for now.", "내일 아침 시작하고, 지금은 결과는 걱정하지 마세요."],
      ["Just show up every day, and let time do the rest.", "그냥 매일 나타나세요, 나머지는 시간이 해 줄 거예요."],
      ["Thank you very much.", "감사합니다."]
    ],
    phrases: [["not in a good place", "상태가 좋지 않은"], ["willpower", "의지력"], ["might as well", "~하는 편이 낫다"], ["take care of itself", "저절로 해결되다"], ["a big deal", "대단한 일"], ["set the bar too high", "기준을 너무 높게 잡다"], ["burn out", "지쳐 버리다"], ["my mind went blank", "머리가 하얘졌다"], ["show up", "나타나다, 꾸준히 하다"]]
  }
];

// 단어 뜻풀이 (기본형=뜻). 여기 없는 단어는 영어 사전(인터넷)에서 찾아 보여 줍니다.
window.GLOSSARY = Object.fromEntries(`
finally=마침내, 드디어|person=사람|marketing=마케팅|tech=기술, IT|company=회사|honest=솔직한|honestly=솔직히|rusty=녹슨; (실력이) 무뎌진|bear=참다, 견디다; 곰|forward=앞으로|relaxing=느긋한, 편안한|relax=쉬다, 긴장을 풀다|hiking=등산, 하이킹|couple=두어 개; 커플|weather=날씨|perfect=완벽한|catch=잡다; 알아듣다|quite=꽤; 완전히|clarify=명확하게 하다|rather=차라리, 오히려|guess=추측하다|double-check=다시 확인하다|mean=의미하다, ~라는 뜻이다|meeting=회의|manager=관리자, 매니저|project=프로젝트|main=주된|typical=보통의, 전형적인|schedule=일정|update=업데이트하다; 최신 소식|designer=디자이너|engineer=엔지니어|agree=동의하다|middle=중간|ground=땅; 입장, 근거|stressful=스트레스가 많은|especially=특히|deadline=마감일|tight=빡빡한, 꽉 끼는|solve=해결하다|talented=재능 있는|colleague=동료|coworker=직장 동료|request=요청|overall=전반적으로|probably=아마|obsessed=집착하는, 푹 빠진|turn=돌다; 바뀌다|sport=운동, 스포츠|driver=(골프) 드라이버; 운전자|popular=인기 있는|stats=통계, 기록|round=(골프) 한 라운드; 둥근|exhausting=몹시 피곤하게 하는|worth=~할 가치가 있는|palace=궁전|traditional=전통적인|neighborhood=동네|nearby=근처의|subway=지하철|cheap=싼|download=다운로드하다|local=현지의, 지역의|global=세계적인, 해외의|market=시장|connecting=연결하는, 환승하는|layover=경유, 환승 대기|plenty=충분함, 많음|unfortunately=안타깝게도|land=착륙하다; 땅|terminal=터미널|frustrated=좌절한, 답답한|staff=직원|available=이용 가능한|following=다음의|airline=항공사|voucher=쿠폰, 상품권|wedding=결혼식|book=예약하다; 책|prefer=선호하다|advantage=장점|crowded=붐비는|focus=집중하다; 초점|report=보고서|proper=제대로 된|lonely=외로운|disconnected=단절된|matter=중요하다; 문제|trust=신뢰|ideal=이상적인|flexibility=유연성|flexible=유연한|attract=끌어들이다|notice=통지; 알아차리다|goal=목표|launch=출시(하다)|quarter=분기; 4분의 1|cover=다루다; 덮다|risk=위험|responsible=책임이 있는, 담당하는|development=개발|core=핵심의|feature=기능, 특징|feedback=피드백|positive=긍정적인|setup=설정|process=과정|issue=문제, 사안|performance=성능; 공연|budget=예산|originally=원래|campaign=캠페인|figure=알아내다(figure out); 수치|spending=지출|suggestion=제안|delay=미루다, 지연|measure=측정하다|channel=채널, 경로|decision=결정|concern=우려, 걱정|freeze=얼어붙다|article=기사|completely=완전히|realize=깨닫다|approach=접근법|memorize=암기하다|shadowing=쉐도잉(듣고 바로 따라 말하기)|shadow=그림자; 따라 말하다|natural=자연스러운|naturally=자연스럽게|silly=바보 같은, 우스운|stumble=비틀거리다; 말을 더듬다|phrase=구, 표현|smoothly=매끄럽게|record=녹음하다; 기록|painful=고통스러운|mistake=실수|native=원어민의, 타고난|panic=당황하다, 공황|advice=조언|situation=상황|ready=준비된|alarm=알람|snooze=스누즈(알람 다시 울림)|successful=성공한|commute=통근|packed=꽉 찬|rarely=거의 ~않는|mumble=중얼거리다|strangely=이상하게|care=신경 쓰다|consider=여기다, 고려하다|success=성공|useful=유용한|noodle=국수|spicy=매운|grab=잡다; 간단히 사다/먹다|block=블록, 구역|awake=깨어 있는|notification=알림|flow=흐름; 몰입|urgent=급한|cook=요리하다; 요리사|stretch=스트레칭하다|review=복습하다; 검토|starred=별표 친|habit=습관|miserable=비참한, 괴로운|repetitive=반복적인|scroll=스크롤하다|promise=약속|gym=헬스장|willpower=의지력|disciplined=절제력 있는|push-up=팔굽혀펴기|desperate=절박한|effort=노력|confidence=자신감|secret=비밀|grateful=감사하는|barely=거의 ~않다|recognize=알아보다|energy=에너지|control=통제|lesson=교훈|bar=기준; 막대|powerful=강력한|attach=붙이다|random=무작위의, 아무|reminder=상기시키는 것, 알림|pour=붓다, 따르다|rely=의존하다|motivation=동기|chain=사슬|terrible=끔찍한|normal=정상적인, 보통의|version=버전, 형태|embarrassed=부끄러운|overseas=해외의|partner=파트너|avoid=피하다|apply=적용하다; 지원하다|volunteer=자원하다|shake=떨다, 흔들다|clearly=분명히|regular=평범한; 규칙적인|challenge=도전|result=결과|tiny=아주 작은|along=~을 따라|deal=거래; 일|blank=빈, 텅 빈|boring=지루한|badly=나쁘게, 심하게|simply=그냥, 단순히|plan=계획(하다)|crazy=미친|gate=게이트, 문|cry=울다|miss=놓치다; 그리워하다|gift=선물|trip=여행|between=~사이에|whether=~인지 아닌지|mix=혼합|clear=분명한|lunch=점심|conversation=대화|teamwork=팀워크|depend=~에 달려 있다|offer=제공하다|joining=참여|product=제품|decide=결정하다|test=시험하다|early=초기의, 이른|especially=특히|load=로딩되다; 짐|hurt=해치다, 아프다|online=온라인의|thousand=천|skill=기술, 능력|brain=뇌|instead=대신에|piece=조각, 한 편|repeat=반복하다|loud=큰 소리의|moment=순간|win=승리; 이기다|exactly=정확히|panicking=당황하는|toast=토스트|bowl=그릇|yogurt=요거트|shower=샤워|dressed=옷을 입은|podcast=팟캐스트|favorite=가장 좋아하는|building=건물|headphone=헤드폰|swing=스윙|parent=부모|kimchi=김치|fried=튀긴, 볶은|rice=밥, 쌀|habitually=습관적으로|repetition=반복|special=특별한|understood=이해했다(understand)|neither=~도 아니다|kitchen=부엌|floor=바닥|confidence=자신감|rest=나머지; 휴식|tonight=오늘 밤|worry=걱정하다|enjoy=즐기다|exciting=신나는|truth=사실, 진실|jump=뛰다
`.trim().split('|').map(p => { const i = p.indexOf('='); return [p.slice(0, i).trim(), p.slice(i + 1).trim()]; }));

// 불규칙 동사·형태 → 기본형
window.IRREGULAR = {
  went: 'go', gone: 'go', caught: 'catch', took: 'take', taken: 'take', made: 'make', thought: 'think', felt: 'feel',
  began: 'begin', begun: 'begin', said: 'say', ran: 'run', got: 'get', gotten: 'get', gave: 'give', given: 'give',
  kept: 'keep', left: 'leave', wrote: 'write', written: 'write', came: 'come', told: 'tell', knew: 'know', known: 'know',
  heard: 'hear', chose: 'choose', chosen: 'choose', woke: 'wake', spent: 'spend', meant: 'mean', ate: 'eat', eaten: 'eat',
  slept: 'sleep', sat: 'sit', stood: 'stand', brought: 'bring', bought: 'buy', found: 'find', lost: 'lose', met: 'meet',
  understood: 'understand', shaking: 'shake', shook: 'shake', children: 'child', people: 'person', better: 'good', best: 'good',
  worse: 'bad', worst: 'bad', hardest: 'hard', biggest: 'big'
};
