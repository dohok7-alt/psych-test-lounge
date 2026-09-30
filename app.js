/**
 * ============================================================
 *  🧠 심리테스트 라운지 — 앱 로직
 * ============================================================
 */

(function () {
  "use strict";

  const app = document.getElementById("app");

  /* ── 상태 ─────────────────────────────────────────────── */
  let currentTest      = null;   // 현재 진행 중인 테스트 객체
  let currentIdx       = 0;      // 현재 질문 인덱스
  let answers          = [];     // 사용자 답변 기록 [{value, ...}]
  let selectedCategory = "all";  // 현재 선택된 카테고리

  /* ── 유틸 ─────────────────────────────────────────────── */

  /** 요소를 fade-out → 콜백 → fade-in 전환 */
  function fadeTransition(container, callback) {
    container.classList.remove("fade-in");
    container.classList.add("fade-out");
    container.addEventListener("animationend", function handler() {
      container.removeEventListener("animationend", handler);
      callback();
      container.classList.remove("fade-out");
      container.classList.add("fade-in");
    }, { once: true });
  }

  /** 토스트 메시지 표시 */
  function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  /** HTML 이스케이프 */
  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }


  /* ══════════════════════════════════════════════════════
     1-a. 필터된 카드 목록 렌더링
     ══════════════════════════════════════════════════════ */
  function renderCards(category) {
    var cardList = app.querySelector(".card-list");
    if (!cardList) return;

    var filtered = TESTS.filter(function (t) {
      return category === "all" || t.category === category;
    });

    var cardsHTML = "";
    filtered.forEach(function (t, fi) {
      // TESTS 배열에서의 원래 인덱스를 찾아 data-index에 저장
      var originalIdx = TESTS.indexOf(t);
      cardsHTML += '<div class="card card-filtered" data-index="' + originalIdx + '" style="--card-color:' + t.color + ';animation-delay:' + (fi * 0.04) + 's">' +
        '<div class="card-emoji">' + t.emoji + '</div>' +
        '<div class="card-text">' +
          '<h2>' + esc(t.title) + '</h2>' +
          '<p>' + esc(t.subtitle) + '</p>' +
        '</div>' +
      '</div>';
    });

    cardList.innerHTML = cardsHTML;

    // 카드 클릭 이벤트 바인딩
    cardList.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("click", function () {
        var idx = parseInt(this.dataset.index, 10);
        startTest(idx);
      });
    });
  }


  /* ══════════════════════════════════════════════════════
     1-b. 홈 화면 렌더링
     ══════════════════════════════════════════════════════ */
  function renderHome() {
    currentTest = null;
    currentIdx  = 0;
    answers     = [];
    window.location.hash = "";

    // 카테고리 필터 탭 생성
    var tabsHTML = "";
    CATEGORIES.forEach(function (cat) {
      var active = (cat.id === selectedCategory) ? " active" : "";
      tabsHTML += '<button class="filter-tab' + active + '" data-cat="' + cat.id + '">' +
                    cat.emoji + ' ' + cat.label +
                  '</button>';
    });

    app.innerHTML =
      '<header class="home-header">' +
        '<h1>🧠 심리테스트 라운지</h1>' +
        '<p>재미로 보는 심리테스트, 골라보세요!</p>' +
      '</header>' +
      '<nav class="filter-bar">' + tabsHTML + '</nav>' +
      '<div class="card-list"></div>';

    // 카드 목록 렌더링
    renderCards(selectedCategory);

    // 필터 탭 클릭 이벤트
    app.querySelectorAll(".filter-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        var cat = this.dataset.cat;
        if (cat === selectedCategory) return;
        selectedCategory = cat;

        // 활성 탭 스타일 업데이트
        app.querySelectorAll(".filter-tab").forEach(function (t) {
          t.classList.remove("active");
        });
        this.classList.add("active");

        // 카드 목록 다시 렌더링
        renderCards(cat);
      });
    });
  }


  /* ══════════════════════════════════════════════════════
     2. 테스트 시작
     ══════════════════════════════════════════════════════ */
  function startTest(testIndex) {
    currentTest = TESTS[testIndex];
    currentIdx  = 0;
    answers     = [];
    window.location.hash = currentTest.id;
    renderQuestion();
  }


  /* ══════════════════════════════════════════════════════
     3. 질문 렌더링
     ══════════════════════════════════════════════════════ */
  function renderQuestion() {
    var total    = currentTest.questions.length;
    var q        = currentTest.questions[currentIdx];
    var percent  = ((currentIdx) / total) * 100;

    var optionsHTML = "";
    q.options.forEach(function (opt, oi) {
      optionsHTML += `<button class="option-btn" data-oi="${oi}">${esc(opt.text)}</button>`;
    });

    app.innerHTML = `
      <div class="test-screen">
        <div class="test-topbar">
          <button class="btn-back" aria-label="뒤로가기">${currentIdx > 0 ? "←" : "✕"}</button>
          <div class="progress-wrapper">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
            <span class="progress-text">${currentIdx + 1} / ${total}</span>
          </div>
        </div>
        <div class="question-area fade-in">
          <div class="question-text">${esc(q.q)}</div>
          <div class="options-list">${optionsHTML}</div>
        </div>
      </div>`;

    // 프로그레스 바 애니메이션 (다음 프레임에서 업데이트)
    requestAnimationFrame(function () {
      var fill = app.querySelector(".progress-fill");
      if (fill) {
        fill.style.width = (((currentIdx + 1) / total) * 100) + "%";
      }
    });

    // 뒤로가기 버튼
    app.querySelector(".btn-back").addEventListener("click", function () {
      if (currentIdx > 0) {
        currentIdx--;
        answers.pop();
        renderQuestion();
      } else {
        renderHome();
      }
    });

    // 선택지 버튼
    app.querySelectorAll(".option-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        handleAnswer(parseInt(this.dataset.oi, 10));
      });
    });
  }


  /* ══════════════════════════════════════════════════════
     4. 답변 처리 + 전환
     ══════════════════════════════════════════════════════ */
  function handleAnswer(optionIndex) {
    var q   = currentTest.questions[currentIdx];
    var opt = q.options[optionIndex];

    // 선택한 버튼 하이라이트
    var btns = app.querySelectorAll(".option-btn");
    btns.forEach(function (b) { b.style.pointerEvents = "none"; });
    btns[optionIndex].style.borderColor = "#6C63FF";
    btns[optionIndex].style.background  = "#f0eeff";
    btns[optionIndex].style.color       = "#6C63FF";

    answers.push(opt);

    // 300ms 뒤 다음 질문으로 전환
    setTimeout(function () {
      var area = app.querySelector(".question-area");
      if (!area) return;

      if (currentIdx < currentTest.questions.length - 1) {
        fadeTransition(area, function () {
          currentIdx++;
          // 프로그레스 바 업데이트
          var total = currentTest.questions.length;
          var fill  = app.querySelector(".progress-fill");
          if (fill) fill.style.width = (((currentIdx + 1) / total) * 100) + "%";
          var progressText = app.querySelector(".progress-text");
          if (progressText) progressText.textContent = (currentIdx + 1) + " / " + total;

          // 새 질문 렌더링 (영역 안쪽만)
          var q2 = currentTest.questions[currentIdx];
          var optHTML = "";
          q2.options.forEach(function (o, oi) {
            optHTML += `<button class="option-btn" data-oi="${oi}">${esc(o.text)}</button>`;
          });
          area.innerHTML = `
            <div class="question-text">${esc(q2.q)}</div>
            <div class="options-list">${optHTML}</div>`;

          // 새 선택지 이벤트
          area.querySelectorAll(".option-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
              handleAnswer(parseInt(this.dataset.oi, 10));
            });
          });
        });
      } else {
        // 마지막 질문 → 결과
        fadeTransition(area, function () {
          renderResult();
        });
      }
    }, 280);
  }


  /* ══════════════════════════════════════════════════════
     5. 채점 엔진
     ══════════════════════════════════════════════════════ */
  function calculateResult() {
    var test = currentTest;

    if (test.scoringType === "sum") {
      // 점수 합산
      var total = 0;
      answers.forEach(function (a) { total += a.value; });
      for (var i = 0; i < test.results.length; i++) {
        var r = test.results[i];
        if (total >= r.minScore && total <= r.maxScore) return r;
      }
      // fallback: 마지막 결과
      return test.results[test.results.length - 1];

    } else if (test.scoringType === "type") {
      // 최다 선택 타입
      var counts = {};
      answers.forEach(function (a) {
        counts[a.value] = (counts[a.value] || 0) + 1;
      });
      var maxType = "";
      var maxCount = 0;
      for (var key in counts) {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          maxType  = key;
        }
      }
      for (var j = 0; j < test.results.length; j++) {
        if (test.results[j].type === maxType) return test.results[j];
      }
      return test.results[0];
    }

    return test.results[0];
  }


  /* ══════════════════════════════════════════════════════
     6. 결과 화면 렌더링
     ══════════════════════════════════════════════════════ */
  function renderResult() {
    window.location.hash = currentTest.id + "-result";

    var result = calculateResult();

    // 타이틀에서 이모지 추출 (마지막 이모지 문자)
    var emojiMatch = result.title.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu);
    var emoji = emojiMatch ? emojiMatch[emojiMatch.length - 1] : currentTest.emoji;
    var titleText = result.title;

    app.innerHTML = `
      <div class="result-screen">
        <div class="result-emoji">${emoji}</div>
        <h2 class="result-title">${esc(titleText)}</h2>
        <p class="result-desc">${esc(result.description)}</p>
        <div class="result-actions">
          <button class="btn-share" id="btnShare">📤 결과 공유하기</button>
          <a class="btn-cta" href="${esc(currentTest.blogUrl)}" target="_blank" rel="noopener noreferrer">
            📖 내 성향에 맞는 심리학 처방전 읽어보기
          </a>
          <button class="btn-home" id="btnHome">🏠 다른 테스트 해보기</button>
        </div>
      </div>`;

    // 공유 버튼
    document.getElementById("btnShare").addEventListener("click", function () {
      var shareText = `[${currentTest.title}] 내 결과: ${result.title}\n${result.description}`;

      if (navigator.share) {
        navigator.share({
          title: currentTest.title,
          text: shareText,
          url: window.location.href
        }).catch(function () { /* 사용자 취소 */ });
      } else {
        // Web Share API 미지원 → 클립보드 복사 fallback
        navigator.clipboard.writeText(shareText + "\n" + window.location.href)
          .then(function () { showToast("📋 결과가 클립보드에 복사되었습니다!"); })
          .catch(function () { showToast("공유 기능을 사용할 수 없습니다."); });
      }
    });

    // 홈 버튼
    document.getElementById("btnHome").addEventListener("click", renderHome);
  }


  /* ══════════════════════════════════════════════════════
     7. 해시 기반 네비게이션
     ══════════════════════════════════════════════════════ */
  window.addEventListener("hashchange", function () {
    var hash = window.location.hash.replace("#", "");
    if (!hash) {
      renderHome();
    }
  });

  // 브라우저 뒤로가기 시 홈으로
  window.addEventListener("popstate", function () {
    if (!window.location.hash || window.location.hash === "#") {
      renderHome();
    }
  });


  /* ══════════════════════════════════════════════════════
     8. 앱 시작
     ══════════════════════════════════════════════════════ */
  renderHome();

})();
