import createProvider, { Consumer as Modal } from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPage from './containers/main/TradeCoinPageContainer';

export { Modal };

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
