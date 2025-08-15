const translations = {
  fr: {
    nav: {
      home: "Accueil et contact",
      research: "Recherche",
      teaching: "Enseignements",
      conferences: "Exposés et conférences"
    },
    home: {
      name: "Théo Ternier",
      job: "Doctorant en calcul formel",
      workplace: "Inria Saclay",
      description: `Actuellement doctorant au sein de l’équipe MATHEXP à l’Inria Saclay, sous la direction de <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">Frédéric Chyzak</a> et <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">Pierre Lairez</a>, je m’intéresse au calcul formel, et plus particulièrement à l’étude des bases de Gröbner à signatures, ainsi qu’à l’informatique.`,
      educationTitle: "Formation académique",
      education: [
        { year: "2023 - 2024", title: "M2 Algèbre Appliquée", school: "UVSQ" },
        { year: "2023 - 2024", title: "M2 Agrégation de mathématiques", school: "Université Paris-Saclay" },
        { year: "2022 - 2023", title: "M1 Mathématiques Fondamentales", school: "Université Paris-Saclay" },
        { year: "2021 - 2022", title: "L3 Magistère de mathématiques", school: "Université Paris-Saclay" },
        { year: "2019 - 2021", title: "CPGE Mathématiques-Physique", school: "Lycée Henri Poincaré (Nancy)" }
      ]
    },
    research: {
      title: "Publications",
      year2024: "2024",
      pub1Title: "Three‐dimensional multiscale assembly of phyllosilicates, organics, and carbonates in small Ryugu fragments",
      pub1Authors: "Zelia Dionnet, Stefano Rubino, Alice Aléon‐Toppani, Rosario Brunetto, Akira Tsuchiyama, Cateline Lantz, Zahia Djouadi, Donia Baklouti, Tomoki Nakamura, Ferenc Borondics, Christophe Sandt, Eva Heripre, David Troadec, Obadias Mivumbi, Jérome Aléon, Théo Ternier, Megumi Matsumoto, Kana Amano, Tomoyo Morita, Hisayoshi Yurimoto, Takaaki Noguchi, Ryuji Okazaki, Hikaru Yabuta, Hiroshi Naraoka, Kanako Sakamoto, Shogo Tachibana, Toru Yada, Masahiro Nishimura, Aiko Nakato, Akiko Miyazaki, Kasumi Yogata, Masanao Abe, Tatsuaki Okada, Tomohiro Usui, Makoto Yoshikawa, Takanao Saiki, Satoshi Tanaka, Fuyuto Terui, Satoru Nakazawa, Seiichiro Watanabe, Yuichi Tsuda, Hayabusa2‐Initial‐Analysis Stone team"
    },
    teaching: {
      title: "Enseignements",
      teach1: {
          title: "UE MEU102 : Algèbre et géométrie", 
          desc1: "L1 Mathématiques",
          title2: "UE Math257 : Équations différentielles", 
          desc2: "L2 Physique",
          title3: "UE PCEU151 : Algèbre et géométrie", 
          desc3: "L1 Physique",
          title4: "H&K", 
          desc4: `Je suis, depuis 2025, auteur de corrigés d’annales des concours de CPGE pour les éditions H&K. La liste des corrigés d’annales auxquels j’ai participé est disponible <a class="text-blue-500" target="_blank" href="https://www.h-k.fr/theo.ternier" rel="noopener noreferrer">ici</a>.`
      },
      teach2: {
          title: "Colles en MP", 
          desc1: "Lycée Pasteur (Neuilly)",
          title2: "Colles en ECG Maths Appliquées", 
          desc2: "Lycée Carnot (Paris)",
          title3: "Cours particuliers Terminale Maths complémentaires", 
          desc3: "Le document joint contient des exercices de niveau Terminale et des annales de BAC.",
      },
      teach3: {
        title: "Agrégation", 
        desc: `Mon profil agreg-maths est trouvable <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">ici</a>.`,
      },
    },
    conferences: {
      title: "Exposés et conférences",
      year2025: "2025",
      conf1Title: "Médiation scientifique à l'Inria Saclay",
      conf1Desc: "Vulgarisation de mes recherches actuelles et initiation d’élèves de seconde à l’étude des arbres."
    }
  },

  en: {
    nav: {
      home: "Home & Contact",
      research: "Research",
      teaching: "Teaching",
      conferences: "Talks & Conferences"
    },
    home: {
      name: "Théo Ternier",
      job: "PhD Student in Computer Algebra",
      workplace: "Inria Saclay",
      description: `I am currently a PhD student in the MATHEXP team at Inria Saclay, under the supervision of <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">Frédéric Chyzak</a> and <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">Pierre Lairez</a>, I am interested in computer algebra, and more specifically in the study of signature-based Gröbner bases, as well as computer science.`,
      educationTitle: "Academic background",
      education: [
        { year: "2023 - 2024", title: "M2 Applied Algebra", school: "UVSQ" },
        { year: "2023 - 2024", title: "M2 Mathematics Agrégation", school: "Université Paris-Saclay" },
        { year: "2022 - 2023", title: "M1 Fundamental Mathematics", school: "Université Paris-Saclay" },
        { year: "2021 - 2022", title: "L3 Fundamental Mathematics (Magistère)", school: "Université Paris-Saclay" },
        { year: "2019 - 2021", title: "Preparatory classes in Mathematics and Physics", school: "Lycée Henri Poincaré (Nancy)" }
      ]
    },
    research: {
      title: "Publications",
      pub1Title: "Three‐dimensional multiscale assembly of phyllosilicates, organics, and carbonates in small Ryugu fragments",
      pub1Authors: "Zelia Dionnet, Stefano Rubino, Alice Aléon‐Toppani, Rosario Brunetto, Akira Tsuchiyama, Cateline Lantz, Zahia Djouadi, Donia Baklouti, Tomoki Nakamura, Ferenc Borondics, Christophe Sandt, Eva Heripre, David Troadec, Obadias Mivumbi, Jérome Aléon, Théo Ternier, Megumi Matsumoto, Kana Amano, Tomoyo Morita, Hisayoshi Yurimoto, Takaaki Noguchi, Ryuji Okazaki, Hikaru Yabuta, Hiroshi Naraoka, Kanako Sakamoto, Shogo Tachibana, Toru Yada, Masahiro Nishimura, Aiko Nakato, Akiko Miyazaki, Kasumi Yogata, Masanao Abe, Tatsuaki Okada, Tomohiro Usui, Makoto Yoshikawa, Takanao Saiki, Satoshi Tanaka, Fuyuto Terui, Satoru Nakazawa, Seiichiro Watanabe, Yuichi Tsuda, Hayabusa2‐Initial‐Analysis Stone team"
    },
    teaching: {
      title: "Teaching",
      teach1: {
          title: "UE MEU102 : Algèbre et géométrie", 
          desc1: "L1 Mathématiques",
          title2: "UE Math257 : Équations différentielles", 
          desc2: "L2 Physique",
          title3: "UE PCEU151 : Algèbre et géométrie", 
          desc3: "L1 Physique",
          title4: "H&K", 
          desc4: `Je suis, depuis 2025, auteur de corrigés d’annales des concours de CPGE pour les éditions H&K. La liste des corrigés d’annales auxquels j’ai participé est disponible <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">ici</a>.`
      },
      teach2: {
          title: "Colles en MP", 
          desc1: "Lycée Pasteur (Neuilly)",
          title2: "Colles en ECG Maths Appliquées", 
          desc2: "Lycée Carnot (Paris)",
          title3: "Cours particuliers Terminale Maths complémentaires", 
          desc3: "Le document joint contient des exercices de niveau Terminale et des annales de BAC.",
      },
      teach3: {
        title: "Agrégation", 
        desc: `Mon profil agreg-maths est trouvable <a class="text-blue-500" target="_blank" href="https://test.com" rel="noopener noreferrer">ici</a>.`,
      },
    conferences: {
      title: "Talks & Conferences",
      conf1Title: "Scientific Mediation at Inria Saclay",
      conf1Desc: "Vulgarization of my current research and introduction of high school students to the study of trees."
    }
  }
  }
};

export default translations;
