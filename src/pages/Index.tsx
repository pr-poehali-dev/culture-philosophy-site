import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const philosophers = [
    {
      name: 'Платон',
      period: '427-347 до н.э.',
      image: 'https://cdn.poehali.dev/projects/460c0121-bbcc-4102-b999-0a621ad2f91f/files/b474a4af-7d17-409a-9fc9-1a89dc71332d.jpg',
      contribution: 'Основатель Академии, автор теории идей и философии государства',
      keyIdeas: ['Мир идей и мир вещей', 'Идеальное государство', 'Триединство души']
    },
    {
      name: 'Аристотель',
      period: '384-322 до н.э.',
      image: 'https://cdn.poehali.dev/projects/460c0121-bbcc-4102-b999-0a621ad2f91f/files/b474a4af-7d17-409a-9fc9-1a89dc71332d.jpg',
      contribution: 'Систематизатор знаний, основатель логики и метафизики',
      keyIdeas: ['Форма и материя', 'Четыре причины', 'Золотая середина']
    },
    {
      name: 'Кант',
      period: '1724-1804',
      image: 'https://cdn.poehali.dev/projects/460c0121-bbcc-4102-b999-0a621ad2f91f/files/b474a4af-7d17-409a-9fc9-1a89dc71332d.jpg',
      contribution: 'Критическая философия, теория познания и этики',
      keyIdeas: ['Категорический императив', 'Вещь в себе', 'Априорные формы']
    }
  ];

  const concepts = [
    {
      title: 'Феноменология',
      description: 'Изучение структур сознания и опыта с точки зрения первого лица',
      details: 'Основана Эдмундом Гуссерлем, феноменология исследует, как мы переживаем мир и конструируем смыслы.'
    },
    {
      title: 'Экзистенциализм',
      description: 'Философия существования, свободы и ответственности индивида',
      details: 'Ключевые мыслители: Кьеркегор, Хайдеггер, Сартр. Центральная идея — существование предшествует сущности.'
    },
    {
      title: 'Герменевтика',
      description: 'Теория и практика интерпретации текстов и культурных явлений',
      details: 'От античности до современности — искусство понимания смыслов в культурном контексте.'
    },
    {
      title: 'Постмодернизм',
      description: 'Критика метанарративов и деконструкция традиционных концепций',
      details: 'Представители: Деррида, Фуко, Лиотар. Фокус на множественности интерпретаций и отсутствии абсолютной истины.'
    }
  ];

  const articles = [
    { title: 'Культура как текст: семиотический подход', date: '15 января 2025', category: 'Семиотика' },
    { title: 'Диалектика Просвещения в современном мире', date: '10 января 2025', category: 'Критическая теория' },
    { title: 'Феномен массовой культуры XXI века', date: '5 января 2025', category: 'Культурология' },
    { title: 'Философия языка и культурная идентичность', date: '28 декабря 2024', category: 'Философия языка' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Философия культуры</h1>
            <div className="flex gap-6">
              {['Главная', 'Философы', 'Концепции', 'Библиотека', 'Статьи', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 text-foreground">
              Исследование смыслов культуры
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Погружение в философское осмысление культурных феноменов, традиций и современности
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Начать изучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Library" className="mr-2" size={20} />
                Библиотека
              </Button>
            </div>
          </div>

          <div 
            className="rounded-2xl overflow-hidden shadow-2xl mb-20 animate-scale-in"
            style={{ 
              backgroundImage: `url(https://cdn.poehali.dev/projects/460c0121-bbcc-4102-b999-0a621ad2f91f/files/53bdc341-e90a-4e22-865b-9ce58004c2df.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px'
            }}
          >
            <div className="h-full bg-gradient-to-r from-secondary/90 to-primary/70 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <Icon name="Sparkles" size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-4xl font-bold mb-3">Мысль как искусство</h3>
                <p className="text-xl opacity-90">Философия — это размышление о вечном через призму культуры</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Icon name="Users" size={36} className="text-primary" />
            Великие мыслители
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophers.map((philosopher, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${philosopher.image})` }}
                />
                <CardHeader>
                  <CardTitle className="text-2xl">{philosopher.name}</CardTitle>
                  <CardDescription className="text-base">{philosopher.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{philosopher.contribution}</p>
                  <div className="space-y-2">
                    {philosopher.keyIdeas.map((idea, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="Sparkle" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{idea}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Icon name="Lightbulb" size={36} className="text-primary" />
            Философские концепции
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {concepts.map((concept, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:text-primary">
                  {concept.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <p className="mb-3 text-base font-medium text-foreground">{concept.description}</p>
                  <p className="leading-relaxed">{concept.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Icon name="Library" size={36} className="text-primary" />
            Библиотека знаний
          </h3>
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="books" className="text-base">Книги</TabsTrigger>
              <TabsTrigger value="courses" className="text-base">Курсы</TabsTrigger>
            </TabsList>
            <TabsContent value="books" className="space-y-4">
              <div 
                className="rounded-xl overflow-hidden shadow-lg mb-8"
                style={{ 
                  backgroundImage: `url(https://cdn.poehali.dev/projects/460c0121-bbcc-4102-b999-0a621ad2f91f/files/b8ab3e4d-cda3-4300-a63f-676043e30086.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px'
                }}
              >
                <div className="h-full bg-gradient-to-t from-secondary/95 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h4 className="text-3xl font-bold mb-2">Классические труды</h4>
                    <p className="text-lg opacity-90">Основополагающие работы по философии культуры</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Критика чистого разума', author: 'Иммануил Кант', year: '1781' },
                  { title: 'Феноменология духа', author: 'Георг Гегель', year: '1807' },
                  { title: 'Бытие и время', author: 'Мартин Хайдеггер', year: '1927' },
                  { title: 'Слова и вещи', author: 'Мишель Фуко', year: '1966' }
                ].map((book, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <CardDescription className="text-base">{book.author} • {book.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <Icon name="BookOpen" className="mr-2" size={18} />
                        Читать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="courses" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Введение в философию культуры', duration: '8 недель', level: 'Начальный' },
                  { title: 'Континентальная философия XX века', duration: '10 недель', level: 'Продвинутый' },
                  { title: 'Культурная антропология', duration: '6 недель', level: 'Средний' },
                  { title: 'Постмодернизм и культура', duration: '8 недель', level: 'Продвинутый' }
                ].map((course, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="text-base">{course.duration} • {course.level}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        <Icon name="GraduationCap" className="mr-2" size={18} />
                        Начать курс
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Icon name="FileText" size={36} className="text-primary" />
            Новые статьи
          </h3>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Tag" size={14} />
                          {article.category}
                        </span>
                      </CardDescription>
                    </div>
                    <Icon name="ArrowRight" size={24} className="text-primary" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Mail" size={48} className="mx-auto mb-6" />
          <h3 className="text-4xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для обсуждения философских идей или сотрудничества
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-3">О проекте</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Образовательный портал, посвящённый философскому осмыслению культуры
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Философы</li>
                <li>Концепции</li>
                <li>Библиотека</li>
                <li>Статьи</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Контакты</h4>
              <div className="flex gap-4">
                <Icon name="Mail" size={20} className="text-muted-foreground" />
                <Icon name="MessageCircle" size={20} className="text-muted-foreground" />
                <Icon name="Share2" size={20} className="text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            © 2025 Философия культуры. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
