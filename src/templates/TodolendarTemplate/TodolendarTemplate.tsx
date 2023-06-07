import { FC } from 'react';
import Calendar from '@organisms/Calendar';

const TodolendarTemplate: FC = () => {
  return (
    <section>
      <article>
        <Calendar
          onDateSelect={(date) => {
            console.log(date);
          }}
        />
      </article>
      <article>
        {/* todolist */}
      </article>

    </section >
  );
};

export default TodolendarTemplate;
