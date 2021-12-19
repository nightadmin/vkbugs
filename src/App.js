import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  withAdaptivity,
  usePlatform,
  ModalPage,
  VKCOM,
  ModalRoot,
  ModalPageHeader,
  CellButton,
  Cell,
  Separator,
  Alert,
  Avatar,
  Placeholder,
  Button,
  Counter,
  PanelHeaderBack,
  PanelHeaderButton,
  PanelHeaderClose,
  PanelHeaderContent,
  Root,
  Search,
  SizeType,
  Tabs,
  TabsItem,
  withPlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon28Notifications, Icon28PictureOutline, Icon28SettingsOutline, Icon56MentionOutline, Icon56MessageReadOutline, Icon56UsersOutline } from "@vkontakte/icons";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPanel: 'panel1',
      modalPanel: 'modal-panel1',
      activeView: 'main'
    }
  }

  render() {
    const { sizeX, platform } = this.props
    return (
      <Root activeView={this.state.activeView}>
        <View id="main" activePanel={this.state.mainPanel}>
          <Panel id="panel1">
            <PanelHeader
              left={<PanelHeaderClose />}
              right={<Avatar size={36} />}
            >
              Стартовый экран
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ mainPanel: 'panel2' }) }>
                Вторая панель
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel2">
            <PanelHeader
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel1' })} label={platform === VKCOM ? 'Назад' : undefined} />}
              right={<PanelHeaderButton aria-label="Изображения" label={<Counter size="s" mode="prominent" aria-label="Обновлений: ">21</Counter>}><Icon28PictureOutline/></PanelHeaderButton>}
            >
              Вторая панель
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ mainPanel: 'panel3' }) }>
                Несколько иконок
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel3">
            <PanelHeader
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel2' })}/>}
              right={
                <React.Fragment>
                  <PanelHeaderButton aria-label="Настройки" label={<Counter size="s" mode="prominent" aria-label="Новые настройки: ">3</Counter>}><Icon28SettingsOutline /></PanelHeaderButton>
                  <PanelHeaderButton aria-label="Уведомления" label={<Counter size="s" mode="prominent" aria-label="Уведомлений: ">2</Counter>}><Icon28Notifications /></PanelHeaderButton>
                </React.Fragment>
              }
            >
              Две иконки
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View id="modal" activePanel={this.state.modalPanel}>
          <Panel id="modal-panel1">
            <PanelHeader
              left={<PanelHeaderButton onClick={() => this.setState({ activeView: 'main' })}>Отмена</PanelHeaderButton>}
              right={<PanelHeaderButton disabled primary onClick={() => this.setState({ activeView: 'main' })}>Готово</PanelHeaderButton>}
            >
              Модальное окно
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel2' }) }>
                Сложный контент
              </CellButton>
            </Group>
          </Panel>
          <Panel id="modal-panel2">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel1' })} label={platform === VKCOM ? 'Назад' : undefined} />}>
              <PanelHeaderContent before={<Avatar size={36} />} status="Был в сети вчера">
                Влад Анесов
              </PanelHeaderContent>
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel3' }) }>
                Поиск
              </CellButton>
            </Group>
          </Panel>
          <Panel id="modal-panel3">
            <PanelHeader separator={platform === VKCOM || sizeX === SizeType.REGULAR} left={platform !== VKCOM && <PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel2' })} />}>
              <Search />
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel4' }) }>
                Табы
              </CellButton>
              {platform === VKCOM && 
                <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel2' }) }>
                  Сложный контент
                </CellButton>
              }
            </Group>
          </Panel>
          <Panel id="modal-panel4">
            <PanelHeader separator={platform === VKCOM || sizeX === SizeType.REGULAR} left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel3' })} />}>
              <Tabs>
                <TabsItem selected>Новости</TabsItem>
                <TabsItem>Интересное</TabsItem>
              </Tabs>
            </PanelHeader>
          </Panel>
        </View>
      </Root>
    )
  }
}

const ExampleWithPlatform = withAdaptivity(withPlatform(Example), { sizeX: true });

const App = ExampleWithPlatform
export default App;
