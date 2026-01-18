const quizData = [
  {
    id: 1,
    q: "Que signifie l’acronyme UFC ?",
    options: {
      a: "Ultimate Fighting Club",
      b: "Ultimate Fighting Championship",
      c: "Universal Fight Combat",
      d: "United Fighting Contest"
    },
    correct:"b"
  },
  {
    id: 2,
    q: "Quel pays est à l’origine de la boxe moderne ?",
    options: {
      a: "Angleterre",
      b: "États-Unis",
      c: "France",
      d: "Mexique"
    },
    correct:"a"
  },
  {
    id: 3,
    q: "Combien de rounds maximum y a-t-il dans un combat de boxe professionnel (hors championnat) ?",
    options: {
      a: "8",
      b: "12",
      c: "15",
      d: "10"
    },
    correct:"b"
  },
  {
    id: 4,
    q: "Quel est l’organe principal utilisé pour gagner un combat par KO en boxe ?",
    options: {
      a: "Les jambes",
      b: "Les épaules",
      c: "Les poings",
      d: "La tête"
    },
    correct:"c"
  },
  {
    id: 5,
    q: "Quel type de combat est autorisé à l’UFC ?",
    options: {
      a: "Boxe anglaise uniquement",
      b: "Arts martiaux mixtes (MMA)",
      c: "Karaté traditionnel",
      d: "Judo olympique"
    },
    correct:"b"
  },
  {
    id: 6,
    q: "Comment appelle-t-on une victoire avant la fin du combat à l’UFC ?",
    options: {
      a: "Décision",
      b: "KO ou soumission",
      c: "Égalité",
      d: "Arrêt médical obligatoire"
    },
    correct:"b"
  },
  {
    id: 7,
    q: "Quel équipement est obligatoire en boxe professionnelle ?",
    options: {
      a: "Gants",
      b: "Casque",
      c: "Protège-tibias",
      d: "Genouillères"
    },
    correct:"a"
  },
  {
    id: 8,
    q: "Quelle discipline est INTERDITE en boxe mais autorisée à l’UFC ?",
    options: {
      a: "Les coups de poing",
      b: "Les coups de pied",
      c: "Les esquives",
      d: "Le jab"
    },
    correct:"b"
  },
  {
    id: 9,
    q: "Comment s’appelle l’aire de combat à l’UFC ?",
    options: {
      a: "Le ring",
      b: "L’octogone",
      c: "L’arène",
      d: "Le tatami"
    },
    correct:"b"
  },
  {
    id: 10,
    q: "Quel est le principal objectif d’une soumission à l’UFC ?",
    options: {
      a: "Marquer des points",
      b: "Fatiguer l’adversaire",
      c: "Forcer l’adversaire à abandonner",
      d: "Gagner par décision"
    },
    correct:"c"
  },
  {
    id: 11,
    q: "Quel style de combat combine boxe, lutte et jiu-jitsu ?",
    options: {
      a: "Kick-boxing",
      b: "MMA",
      c: "Boxe thaï",
      d: "Savate"
    },
    correct:"b"
  },
  {
    id: 12,
    q: "En boxe, comment s’appelle un coup direct porté avec le poing avant ?",
    options: {
      a: "Uppercut",
      b: "Jab",
      c: "Crochet",
      d: "Overhand"
    },
    correct:"b"
  },
  {
    id: 13,
    q: "Quelle organisation est la plus connue mondialement en MMA ?",
    options: {
      a: "WBC",
      b: "IBF",
      c: "UFC",
      d: "WBA"
    },
    correct:"c"
  },
  {
    id: 14,
    q: "Quel est le nombre de rounds dans un combat de championnat à l’UFC ?",
    options: {
      a: "3",
      b: "5",
      c: "10",
      d: "12"
    },
    correct:"b"
  },
  {
    id: 15,
    q: "Quelle qualité est essentielle aussi bien en boxe qu’en UFC ?",
    options: {
      a: "La chance",
      b: "La discipline et la condition physique",
      c: "La taille",
      d: "La vitesse uniquement"
    },
    correct:"b"
  }
];
function initQuiz() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < quizData.length; i++) {
        const q = quizData[i];
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.id = 'question-' + q.id;
        
        const title = document.createElement('h3');
        title.textContent = 'Question ' + (i + 1) + ' : ' + q.q;
        questionDiv.appendChild(title);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        
        const keys = ['a', 'b', 'c', 'd'];
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = 'q' + q.id + key;
            radio.name = 'q' + q.id;
            radio.value = key;
            
            const label = document.createElement('label');
            label.htmlFor = 'q' + q.id + key;
            label.textContent = q.options[key];
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            
            optionDiv.onclick = function() {
                radio.checked = true;
                const allOptions = optionsDiv.querySelectorAll('.option');
                for (let k = 0; k < allOptions.length; k++) {
                    allOptions[k].classList.remove('selected');
                }
                optionDiv.classList.add('selected');
            };
            
            optionsDiv.appendChild(optionDiv);
        }
        
        questionDiv.appendChild(optionsDiv);
        
        const feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'feedback-' + q.id;
        feedbackDiv.className = 'feedback';
        questionDiv.appendChild(feedbackDiv);
        
        container.appendChild(questionDiv);
    }
}

function calculateScore() {
    let score = 0;
    
    for (let i = 0; i < quizData.length; i++) {
        const q = quizData[i];
        const selected = document.querySelector('input[name="q' + q.id + '"]:checked');
        
        if (!selected) {
            alert('⚠️ Veuillez répondre à toutes les questions avant de valider !');
            return;
        }
    }
    
    const allRadios = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < allRadios.length; i++) {
        allRadios[i].disabled = true;
    }
    document.getElementById('submitBtn').disabled = true;
    
    for (let i = 0; i < quizData.length; i++) {
        const q = quizData[i];
        const selected = document.querySelector('input[name="q' + q.id + '"]:checked').value;
        const feedback = document.getElementById('feedback-' + q.id);
        
        const correctOption = document.getElementById('q' + q.id + q.correct).parentElement;
        correctOption.classList.add('correct');
        
        if (selected === q.correct) {
            score++;
            feedback.textContent = '✅ Correct !';
            feedback.className = 'feedback visible correct-text';
        } else {
            const wrongOption = document.getElementById('q' + q.id + selected).parentElement;
            wrongOption.classList.add('wrong');
            feedback.textContent = '❌ Incorrect. La bonne réponse était : ' + q.options[q.correct];
            feedback.className = 'feedback visible wrong-text';
        }
    }
    
    const resultDiv = document.getElementById('result');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreMessage = document.getElementById('scoreMessage');
    
    scoreDisplay.textContent = score + '/' + quizData.length;
    
    let message = '';
    let className = '';
    
    if (score === 15) {
        message = 'Parfait ! Vous êtes un expert en sports de combat !';
        className = 'score-excellent';
    } else if (score >= 12) {
        message = 'Excellent travail ! Presque un sans-faute.';
        className = 'score-excellent';
    } else if (score >= 8) {
        message = 'Très bien ! Vous avez de solides bases.';
        className = 'score-good';
    } else if (score >= 5) {
        message = 'Pas mal, mais une petite révision s\'impose.';
        className = 'score-average';
    } else {
        message = 'Ne vous découragez pas ! Continuez d\'apprendre.';
        className = 'score-poor';
    }
    
    scoreDisplay.className = 'score-display ' + className;
    scoreMessage.textContent = message;
    resultDiv.style.display = 'block';
    
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    if (confirm('Voulez-vous vraiment recommencer le quiz ?')) {
        document.getElementById('result').style.display = 'none';
        document.getElementById('submitBtn').disabled = false;
        initQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
window.onload = initQuiz;
