import React from 'react';
import InputForm from './UI/input/InputForm';
import SelectForm from './UI/select/selectForm';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <InputForm 
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск...'
      />
      <SelectForm 
        value={filter.sort}
        onChange={val => setFilter({...filter, sort: val})}
        defaultValue="Сортировка по:"
        options={[
          {value: 'title', name: 'По заголовку'},
          {value: 'body', name: 'По описанию'},
      ]}
      />
    </div>
  );
}

export default PostFilter;
