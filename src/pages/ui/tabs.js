import React, { Component } from "react";
import { Tabs, Card, message ,Icon} from "antd";
const TabPane = Tabs.TabPane;
export default class TabPage extends Component {
  handleTabChange = activeKey => {
    message.info(`hi,你选择了页签 ${activeKey}`);
  };
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            {
                title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false,
            },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }

    render() {
    return (
      <>
        <Card title="Tab页签">
          <Tabs
            defaultActiveKey="1"
            onChange={activeKey => this.handleTabChange(activeKey)}
          >
            <TabPane tab="Tab 1" key="1">
              欢迎学习react
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              react很厉害
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标的页签">
          <Tabs
            defaultActiveKey="1"
            onChange={activeKey => this.handleTabChange(activeKey)}
          >
            <TabPane tab={<span><Icon type='plus'/>Tab 1</span>} key="1">
              欢迎学习react
            </TabPane>
            <TabPane tab={<span><Icon type='edit'/>Tab 2</span>} key="2" >
                再次欢迎学习react
            </TabPane>
            <TabPane tab={<span><Icon type='delete'/>Tab 3</span>} key="3">
                三次欢迎学习react
            </TabPane>
          </Tabs>
        </Card>
          <Card title='新增和关闭标签'>
              <Tabs
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}
              >
                  {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
              </Tabs>
          </Card>
      </>
    );
  }
}
