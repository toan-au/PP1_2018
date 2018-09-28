const axios = require('axios');
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
// models
const userCalls = require('../userFunctions/userCalls');
const Questions = require('../models').questions;
const Answers = require('../models').answers;
const Locale = require('../models').locale;
const Region = require('../models').region;
const Users = require('../models').users;
const Responses = require('../models').responses;
const Games = require('../models').games;
const Genres = require('../models').genres;
const PrefGenres = require('../models').prefGenres;
const PrefGames = require('../models').prefGames;
const Ratings = require('../models').ratings;
const Platforms = require('../models').platforms;
const PlatformIds = require('../models').platformsIds;
const Matches = require('../models').matches;


describe('Expected Data', () => {
    //checks Locales all match seeders
    it('Locales', async() => {
        const locales = await Locale.findAll({ attributes: ['id', 'locale'] });
  
        var comparisonLocales = [{locale: 'en'}, {locale: 'es'}, {locale: 'zh'}, {locale: 'ja'}, {locale: 'vi'}]
  
        assert.lengthOf(locales, comparisonLocales.length, "Incorrect number of loaded locales")
        
        for(var loopCounter = 0; loopCounter < comparisonLocales.length; loopCounter++){
            var localeExists = false;
            for(var innerCounter = 0; innerCounter < locales.length; innerCounter++){
                if(comparisonLocales[loopCounter].locale == locales[innerCounter].locale){
                    localeExists = true;
                }
            }

            assert.isTrue(localeExists, "value missing from locales: " + comparisonLocales[loopCounter].locale)
        }
  
    }).timeout(8000);

    //checks Regions all match seeders
    it('Regions', async() => {
        const regions = await Region.findAll({ attributes: ['id', 'region'] });
  
        var comparisonRegion = [{region: 'NA'}, {region: 'OCE'}, {region: 'JP'}, {region: 'SEA'}, {region: 'CN'}]
  
        assert.lengthOf(regions, comparisonRegion.length, "Incorrect number of loaded regions")
        
        for(var loopCounter = 0; loopCounter < comparisonRegion.length; loopCounter++){
            var regionExists = false;
            for(var innerCounter = 0; innerCounter < regions.length; innerCounter++){
                if(comparisonRegion[loopCounter].region == regions[innerCounter].region){
                    regionExists = true;
                }
            }

            assert.isTrue(regionExists, "value missing from regions: " + comparisonRegion[loopCounter].region)
        }
  
    }).timeout(8000);
    
    //checks Games all match seeders
    it('Games', async() => {
        const games = await Games.findAll({ attributes: ['id', 'title'] });
  
        var comparisonGames =[
        {title: 'Path of Exile', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Battlefield 1', createdAt:new Date(),updatedAt:new Date()},
        {title: 'War Thunder', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Overwatch', createdAt:new Date(),updatedAt:new Date()},
        {title: 'TERA', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Dragon Ball FighterZ', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Dark Souls 3', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Guild Wars 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Rocket League', createdAt:new Date(),updatedAt:new Date()},
        {title: 'ARK', createdAt:new Date(),updatedAt:new Date()},
        {title: 'World of Tanks', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Elite Dangerous', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Titanfall 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Tom Clancy\'s Rainbow Six Siege', createdAt:new Date(),updatedAt:new Date()},
        {title: 'PUBG', createdAt:new Date(),updatedAt:new Date()},
        {title: 'League of Legends', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Gwent', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Final Fantasy XIV', createdAt:new Date(),updatedAt:new Date()},
        {title: 'For Honor', createdAt:new Date(),updatedAt:new Date()},
        {title: 'No Man\'s Sky', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Fortnite', createdAt:new Date(),updatedAt:new Date()},
        {title: 'osu!', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Warframe', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Pokemon Go', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Dota 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Minecraft', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Black Desert Online', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Grand Theft Auto 5', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Starcraft 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'The Elder Scrolls Online', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Diablo 3', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Sea of Thieves', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Smite', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Destiny 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'World of Warcraft', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Persona 5', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Monster Hunter: World', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Don\'t Starve', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Counter Strike Global Offensive', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Payday 2', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Hearthstone', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Stardew Valley', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Subnautica', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Civilization VI', createdAt:new Date(),updatedAt:new Date()}]
  
        assert.lengthOf(games, comparisonGames.length, "Incorrect number of loaded games")
        
        for(var loopCounter = 0; loopCounter < comparisonGames.length; loopCounter++){
            var gameExists = false;
            for(var innerCounter = 0; innerCounter < games.length; innerCounter++){
                if(comparisonGames[loopCounter].title == games[innerCounter].title){
                    gameExists = true;
                }
            }

            assert.isTrue(gameExists, "value missing from games: " + comparisonGames[loopCounter].title)
        }
  
    }).timeout(8000);

    //checks Genres all match seeders
    it('Genres', async() => {
        const genres = await Genres.findAll({ attributes: ['id', 'title'] });
  
        var comparisonGenre =[
        {title: 'Action', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Fantasy', createdAt:new Date(),updatedAt:new Date()},
        {title: 'FPS', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Platformer', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Puzzle', createdAt:new Date(),updatedAt:new Date()},
        {title: 'RPG', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Shooters', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Arcade', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Roguelike', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Sandbox', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Management', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Simulation', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Co-operative', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Rhythm', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Indie', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Sports', createdAt:new Date(),updatedAt:new Date()},
        {title: 'MOBA', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Fighting', createdAt:new Date(),updatedAt:new Date()},
        {title: '4X', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Real Time Strategy', createdAt:new Date(),updatedAt:new Date()}
      ]
  
        assert.lengthOf(genres, comparisonGenre.length, "Incorrect number of loaded genres")
        
        for(var loopCounter = 0; loopCounter < comparisonGenre.length; loopCounter++){
            var genreExists = false;
            for(var innerCounter = 0; innerCounter < genres.length; innerCounter++){
                if(comparisonGenre[loopCounter].title == genres[innerCounter].title){
                    genreExists = true;
                }
            }

            assert.isTrue(genreExists, "value missing from genres: " + comparisonGenre[loopCounter].title)
        }
  
    }).timeout(8000);

    //checks Platforms all match seeders
    it('Platforms', async() => {
        const platforms = await Platforms.findAll({ attributes: ['id', 'title'] });
  
        var comparisonPlatform = [
        {title: 'Nintendo', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Origin', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Xbox', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Playstation', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Twitch', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Discord', createdAt:new Date(),updatedAt:new Date()},
        {title: 'Steam', createdAt:new Date(),updatedAt:new Date()}
        ]
  
        assert.lengthOf(platforms, comparisonPlatform.length, "Incorrect number of loaded genres")
        
        for(var loopCounter = 0; loopCounter < comparisonPlatform.length; loopCounter++){
            var platformExists = false;
            for(var innerCounter = 0; innerCounter < platforms.length; innerCounter++){
                if(comparisonPlatform[loopCounter].title == platforms[innerCounter].title){
                    platformExists = true;
                }
            }

            assert.isTrue(platformExists, "value missing from platforms: " + comparisonPlatform[loopCounter].title)
        }
  
    }).timeout(8000);

    //checks Questions all match seeders
    it('Questions', async() => {
        const questions = await Questions.findAll({ attributes: ['questionText'] });
  
        var comparisonQuestions = [{
            questionText: 'If you were playing an MMO, what is your preferred role?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'I would prefer to play with...',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'I am someone who...?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'You are playing a puzzle game and you are stuck. You...',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'What aspect of a game is the most important to you?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'A teammate steals your kill. You...',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'What word best describes you?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'How long do you want this friendship to last?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'Which is the better activity?',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionText: 'On average, how many hours a day do you play video games?',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]
  
        assert.lengthOf(questions, comparisonQuestions.length, "Incorrect number of loaded genres")
        
        for(var loopCounter = 0; loopCounter < comparisonQuestions.length; loopCounter++){
            var questionExists = false;
            for(var innerCounter = 0; innerCounter < questions.length; innerCounter++){
                if(comparisonQuestions[loopCounter].questionText == questions[innerCounter].questionText){
                    questionExists = true;
                }
            }

            assert.isTrue(questionExists, "value missing from questions: " + comparisonQuestions[loopCounter].questionText)
        }
  
    }).timeout(8000);

    //checks Answers all match seeders
    it('Answers', async() => {
        const answers = await Answers.findAll({ attributes: ['questionId', 'answerText', 'answerKey'] });
  
        var comparisonAnswers = [{
            questionId: 1,
            answerText: 'Tank',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 1,
            answerText: 'DPS',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 1,
            answerText: 'Support',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 1,
            answerText: 'Hybrid/Other',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 2,
            answerText: 'Someone from my region',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 2,
            answerText: 'Someone from surrounding areas',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 2,
            answerText: 'Someone from any region',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 2,
            answerText: 'I want to game by myself',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 3,
            answerText: 'Uses profanities all the time',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 3,
            answerText: 'Uses profanities often',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 3,
            answerText: 'Rarely uses profanities',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 3,
            answerText: 'Never uses profanities',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 4,
            answerText: 'Try to solve the puzzle with trial and error',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 4,
            answerText: 'Sit and think thoroughly about a solution',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 4,
            answerText: 'Quit the game',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 4,
            answerText: 'Search for an answer on the internet',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 5,
            answerText: 'Story',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 5,
            answerText: 'Gameplay',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 5,
            answerText: 'Art',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 5,
            answerText: 'Social',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 6,
            answerText: 'BM them',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 6,
            answerText: 'Cheer them on',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 6,
            answerText: 'Steal their kill',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 6,
            answerText: 'Quit the game',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 7,
            answerText: 'Chill',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 7,
            answerText: 'Quiet',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 7,
            answerText: 'Agressive',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 7,
            answerText: 'Energetic',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 8,
            answerText: 'One day',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 8,
            answerText: 'A few months to a year',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 8,
            answerText: 'Several years',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 8,
            answerText: 'Forever',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 9,
            answerText: 'Playing a multiplayer game with your friends online',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 9,
            answerText: 'Playing a multiplayer game with your friends locally',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 9,
            answerText: 'Being engrossed in a game by yourself',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 9,
            answerText: 'Watching someone else play games',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 10,
            answerText: 'Less than an hour',
            answerKey: 'A',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 10,
            answerText: '2 to 5 hours',
            answerKey: 'B',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 10,
            answerText: '5 to 10 hours',
            answerKey: 'C',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            questionId: 10,
            answerText: 'More than 10 hours',
            answerKey: 'D',
            createdAt: new Date(),
            updatedAt: new Date()
          }
    
        ]
  
        assert.lengthOf(answers, comparisonAnswers.length, "Incorrect number of loaded Answers")
        
        for(var loopCounter = 0; loopCounter < comparisonAnswers.length; loopCounter++){
            var answersExists = false;
            for(var innerCounter = 0; innerCounter < answers.length; innerCounter++){
                if(comparisonAnswers[loopCounter].answerText == answers[innerCounter].answerText &&
                    comparisonAnswers[loopCounter].questionId == answers[innerCounter].questionId &&
                    comparisonAnswers[loopCounter].answerKey == answers[innerCounter].answerKey){
                    answersExists = true;
                }
            }

            assert.isTrue(answersExists, "value missing from answers \n answerText: " 
            + comparisonAnswers[loopCounter].answerText + "\n questionId: " 
            + comparisonAnswers[loopCounter].questionId + "\n answerKey: " 
            + comparisonAnswers[loopCounter].answerKey)
        }
  
    }).timeout(8000);
  });