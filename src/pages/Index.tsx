import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [subscribers, setSubscribers] = useState(1000);
  
  const calculatePrice = (count: number) => {
    if (count <= 500) return count * 3;
    if (count <= 2000) return count * 2.5;
    if (count <= 5000) return count * 2;
    return count * 1.5;
  };

  const price = calculatePrice(subscribers);

  const plans = [
    {
      name: 'Starter',
      subscribers: '500',
      price: '1 500',
      features: ['Быстрая доставка', 'Живые аккаунты', 'Гарантия качества', 'Поддержка 24/7'],
      gradient: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      name: 'Professional',
      subscribers: '2 000',
      price: '5 000',
      features: ['Всё из Starter', 'Премиум аккаунты', 'Приоритетная доставка', 'Персональный менеджер'],
      gradient: 'from-blue-500 to-purple-500',
      popular: true
    },
    {
      name: 'Business',
      subscribers: '5 000',
      price: '10 000',
      features: ['Всё из Professional', 'VIP поддержка', 'Индивидуальная стратегия', 'Аналитика роста'],
      gradient: 'from-pink-500 to-orange-500',
      popular: false
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Мгновенный старт',
      description: 'Подписчики начнут поступать сразу после оплаты'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Гарантия безопасности вашего аккаунта'
    },
    {
      icon: 'Users',
      title: 'Живые аккаунты',
      description: 'Только реальные активные пользователи'
    },
    {
      icon: 'TrendingUp',
      title: 'Рост охвата',
      description: 'Увеличение органического охвата постов'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNG0wLTJoLTRjLTEuMSAwLTIgLjktMiAydjRjMCAxLjEuOSAyIDIgMmg0YzEuMSAwIDItLjkgMi0ydi00YzAtMS4xLS45LTItMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 Накрутка подписчиков ВКонтакте
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-slide-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient bg-[length:200%_auto]">
              Вырастите свою
            </span>
            <br />
            <span className="text-gray-900">аудиторию</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Быстрая и безопасная накрутка подписчиков для вашего сообщества ВКонтакте. От 1 500 ₽ за 500 подписчиков
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              Начать прямо сейчас
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-6 text-lg rounded-2xl">
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-purple-100">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gray-900">
              Калькулятор стоимости
            </h2>
            <p className="text-xl text-gray-600">
              Рассчитайте точную стоимость под ваши потребности
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-2 border-purple-100 shadow-2xl rounded-3xl">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-lg font-semibold text-gray-700">
                    Количество подписчиков
                  </label>
                  <div className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    {subscribers.toLocaleString()}
                  </div>
                </div>
                
                <Slider
                  value={[subscribers]}
                  onValueChange={(value) => setSubscribers(value[0])}
                  min={100}
                  max={10000}
                  step={100}
                  className="mb-8"
                />

                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-[2px] rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600 mb-2">Итоговая стоимость</p>
                        <p className="text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {price.toLocaleString()} ₽
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          {(price / subscribers).toFixed(2)} ₽ за подписчика
                        </p>
                      </div>
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                        Заказать
                        <Icon name="ShoppingCart" className="ml-2" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Icon name="Clock" className="mx-auto mb-2 text-purple-600" size={24} />
                  <p className="font-semibold text-gray-900">Старт через 5 минут</p>
                  <p className="text-sm text-gray-600">После оплаты</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <Icon name="CheckCircle" className="mx-auto mb-2 text-pink-600" size={24} />
                  <p className="font-semibold text-gray-900">Гарантия качества</p>
                  <p className="text-sm text-gray-600">100% возврат</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Icon name="Headphones" className="mx-auto mb-2 text-blue-600" size={24} />
                  <p className="font-semibold text-gray-900">Поддержка 24/7</p>
                  <p className="text-sm text-gray-600">Всегда на связи</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4 text-gray-900">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative p-8 rounded-3xl transition-all hover:scale-105 ${
                  plan.popular 
                    ? 'border-2 border-purple-500 shadow-2xl shadow-purple-500/20' 
                    : 'border border-gray-200 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Популярный
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 mx-auto`}>
                  <Icon name="Users" className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-heading font-bold text-center mb-2 text-gray-900">
                  {plan.name}
                </h3>
                
                <div className="text-center mb-6">
                  <p className="text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    {plan.price} ₽
                  </p>
                  <p className="text-gray-600 mt-2">{plan.subscribers} подписчиков</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Icon name="Check" className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/50'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              VK Growth
            </h3>
          </div>
          <p className="text-gray-400 mb-6">
            Профессиональная накрутка подписчиков ВКонтакте с 2020 года
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 VK Growth. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
