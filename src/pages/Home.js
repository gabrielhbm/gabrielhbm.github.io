import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('description')}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin, purus eu pulvinar commodo, tortor neque efficitur urna, ac rhoncus elit leo sit amet nibh. In bibendum mattis velit ut sodales. Etiam suscipit faucibus consectetur. Nulla luctus scelerisque magna pellentesque commodo. Vivamus convallis sollicitudin vulputate. Donec sed nulla et odio scelerisque porttitor. Etiam nec nibh mauris. Ut tincidunt diam quis convallis sodales. Vestibulum sit amet augue ac orci pharetra ullamcorper. Duis scelerisque vehicula commodo. Phasellus pellentesque rutrum odio, in egestas turpis egestas nec. Nulla cursus justo sit amet accumsan maximus.

Fusce id sagittis est. Sed efficitur nulla a arcu pretium congue. Pellentesque aliquet ante vehicula, sollicitudin ipsum non, vulputate lorem. Nullam venenatis fermentum fringilla. Nulla congue vulputate augue, eu aliquam lorem consequat non. Vestibulum eu enim vel arcu varius tempor. Proin quis ullamcorper elit, vel convallis lorem.

Morbi eu sollicitudin nisl, ut viverra quam. Sed sollicitudin erat ut sagittis aliquet. Donec tristique imperdiet nulla et scelerisque. Curabitur malesuada molestie ipsum, eleifend placerat ante feugiat vel. Vestibulum dignissim turpis pretium, tristique magna ac, porttitor mi. Vivamus hendrerit eget nibh vel tincidunt. Integer sem odio, tempor vitae orci ac, mollis volutpat elit. Integer egestas volutpat convallis. Aenean tristique efficitur egestas. Curabitur nibh augue, tincidunt vel tempus sed, pulvinar nec lorem. Nam sed nisl ante.

Vivamus vel dictum leo, vitae consectetur nulla. Fusce sed nunc vel odio porttitor varius et a tortor. Curabitur id tortor quis metus varius rutrum eu et turpis. Curabitur vulputate sodales velit, non suscipit arcu venenatis vel. Aenean tempor justo at urna imperdiet porta. Aliquam justo erat, rutrum vitae lacinia at, elementum quis nisl. Morbi ultrices quis urna fringilla commodo. Curabitur quam tellus, ultricies in molestie pharetra, blandit at eros. Donec sit amet quam leo. Nam in commodo odio. Cras vestibulum laoreet odio vel consectetur. Nullam eu libero orci. Cras scelerisque nibh non dolor elementum ultricies. Quisque sollicitudin ultrices massa et hendrerit. In a varius tellus.

Praesent tristique risus ac accumsan blandit. Curabitur vitae ante mi. Curabitur consectetur vel mi vel sodales. Praesent tristique mattis tortor, ac semper lectus pretium sit amet. Quisque sed molestie erat. Sed eu urna vitae lorem sagittis scelerisque eu in purus. Quisque faucibus posuere urna, quis condimentum mauris ultricies nec. Quisque ultrices nibh tincidunt nibh feugiat, id suscipit tortor vestibulum. In hac habitasse platea dictumst. Morbi in accumsan lectus. Suspendisse consectetur, diam vel facilisis commodo, magna augue blandit dolor, porttitor placerat ipsum mi ac sem. Nunc quis purus non mauris eleifend luctus vel sed eros. Phasellus vestibulum, erat a sagittis mollis, nunc tellus scelerisque leo, nec lacinia dui urna eget justo. Donec ipsum risus, consequat vel nibh at, consectetur elementum nisl.</p>
    </div>
  );
};

export default Home;
