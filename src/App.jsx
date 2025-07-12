
import './App.css'

const modules = [
  {
    name: 'Understanding Money',
    lessons: [
      { title: 'What Is Money?', dir: 'modules/module1-understanding-money/1.1-what-is-money' },
      { title: 'Where Does Money Go?', dir: 'modules/module1-understanding-money/1.2-where-does-money-go' },
      { title: 'What is a Product?', dir: 'modules/module1-understanding-money/1.3-what-is-a-product' },
    ],
  },
  {
    name: 'Earning Money Online',
    lessons: [
      { title: 'Create Something Sellable', dir: 'modules/module2-earning-money-online/2.1-create-something-sellable' },
      { title: 'Make a Landing Page', dir: 'modules/module2-earning-money-online/2.2-make-a-landing-page' },
      { title: 'Add a Payment Button', dir: 'modules/module2-earning-money-online/2.3-add-a-payment-button' },
    ],
  },
  {
    name: 'Saving and Growing Money',
    lessons: [
      { title: 'The Power of Saving', dir: 'modules/module3-saving-and-growing-money/3.1-the-power-of-saving' },
      { title: 'Intro to Investing', dir: 'modules/module3-saving-and-growing-money/3.2-intro-to-investing' },
      { title: 'The $10 Challenge', dir: 'modules/module3-saving-and-growing-money/3.3-the-10-dollar-challenge' },
    ],
  },
  {
    name: 'Money & Meaning',
    lessons: [
      { title: 'What Will You Build With Your Wealth?', dir: 'modules/module4-money-and-meaning/4.1-what-will-you-build-with-your-wealth' },
      { title: 'Giving Back', dir: 'modules/module4-money-and-meaning/4.2-giving-back' },
    ],
  },
];

function App() {
  // For MVP, progress is not persisted. Add state for completed lessons if desired.
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Money Skills Journey</h2>
        <nav>
          {modules.map((mod, i) => (
            <div key={mod.name}>
              <h3>{i + 1}. {mod.name}</h3>
              <ul>
                {mod.lessons.map((lesson, j) => (
                  <li key={lesson.title}>
                    <a href={`https://github.com/InventorSingh/money/tree/main/${lesson.dir}`} target="_blank" rel="noopener noreferrer">
                      {i + 1}.{j + 1} {lesson.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <h1>Welcome to Money Skills!</h1>
        <p>
          This course will guide you through the essentials of earning, saving, investing, and using money wisely—by building real projects.
        </p>
        <h2>Your Progress</h2>
        <ul className="progress-list">
          {modules.map((mod, i) => (
            <li key={mod.name}>
              <strong>{mod.name}</strong>
              <ul>
                {mod.lessons.map((lesson, j) => (
                  <li key={lesson.title}>
                    <input type="checkbox" disabled /> {lesson.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p style={{marginTop: '2em'}}>
          <em>Start by picking a lesson from the sidebar. Each lesson links to its directory in the main repository.</em>
        </p>
      </main>
    </div>
  );
}

export default App;
