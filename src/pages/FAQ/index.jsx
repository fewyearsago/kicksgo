import React from 'react';
import style from './index.module.scss';

const FAQ = () => {
  const list = [
    {
      question: 'Как выбрать правильный размер кроссовок?',
      answer:
        'Чтобы выбрать правильный размер кроссовок, рекомендуется измерить длину стопы и использовать таблицу размеров, предоставленную на нашем сайте. Обратите внимание, что различные бренды могут иметь небольшие отклонения в размерах, поэтому важно ознакомиться с индивидуальными рекомендациями каждого производителя.',
    },
    {
      question: 'Как ухаживать за кроссовками?',
      answer:
        'Для правильного ухода за кроссовками рекомендуется следовать инструкциям производителя. Обычно рекомендуется протирать поверхность кроссовок мягкой щеткой или тряпкой, используя мягкое мыло или специальные средства для чистки обуви. Избегайте подвергания кроссовок интенсивной тепловой или механической обработке, чтобы сохранить их внешний вид и качество.',
    },
    {
      question: 'Можно ли вернуть или обменять кроссовки, если они не подошли?',
      answer:
        'Да, мы предоставляем возможность возврата или обмена кроссовок, если они не подошли. Пожалуйста, обратитесь к нашей политике возврата и обмена, чтобы ознакомиться с подробностями и условиями возврата. Обычно требуется сохранить оригинальную упаковку и не использовать обувь на улице, чтобы иметь возможность вернуть или обменять кроссовки.',
    },
    {
      question: 'Как узнать, когда будут новые поступления кроссовок?',
      answer:
        'Мы постоянно обновляем наш ассортимент кроссовок и стараемся предоставить вам самые последние модели. Чтобы быть в курсе новых поступлений, рекомендуется подписаться на нашу рассылку новостей или следить за нами в социальных сетях. Также вы можете периодически посещать наш сайт, чтобы узнать о новых поступлениях кроссовок.',
    },
  ];
  const [selected, setSelected] = React.useState(null);
  const onClickMenu = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootContent}>
          <h1 className={style.rootMainTitle}>FAQ</h1>
          {list.map((e, i) => (
            <div className={style.rootItem}>
              <div onClick={() => onClickMenu(i)} className={style.rootItemTitle}>
                <h1 className={selected === i ? style.rootBoxTitleActive : style.rootBoxTitle}>
                  {e.question}
                </h1>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? style.rootItemTextActive : style.rootItemText}>
                <p className={style.rootItemAnswerText}>{e.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;