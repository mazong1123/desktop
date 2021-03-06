const React = require('react');
const {Nav, NavItem} = require('react-bootstrap');

class TabBar extends React.Component {
  render() {
    var self = this;
    var tabs = this.props.teams.map((team, index) => {
      var unreadCount = 0;
      var badgeStyle = {
        background: '#FF1744',
        float: 'right',
        color: 'white',
        minWidth: '19px',
        fontSize: '12px',
        textAlign: 'center',
        lineHeight: '20px',
        height: '19px',
        marginLeft: '5px',
        borderRadius: '50%'
      };

      if (self.props.unreadCounts[index] > 0) {
        unreadCount = self.props.unreadCounts[index];
      }
      if (self.props.unreadAtActive[index]) {
        unreadCount += 1;
      }

      var mentionCount = 0;
      if (self.props.mentionCounts[index] > 0) {
        mentionCount = self.props.mentionCounts[index];
      }
      if (self.props.mentionAtActiveCounts[index] > 0) {
        mentionCount += self.props.mentionAtActiveCounts[index];
      }

      var badgeDiv;
      if (mentionCount !== 0) {
        badgeDiv = (
          <div style={badgeStyle}>
            {mentionCount}
          </div>);
      }
      var id = 'teamTabItem' + index;
      if (unreadCount === 0) {
        return (
          <NavItem
            className='teamTabItem'
            key={id}
            id={id}
            eventKey={index}
          >
            { team.name }
            { ' ' }
            { badgeDiv }
          </NavItem>);
      }
      return (
        <NavItem
          className='teamTabItem'
          key={id}
          id={id}
          eventKey={index}
        >
          <b>{ team.name }</b>
          { ' ' }
          { badgeDiv }
        </NavItem>);
    });
    return (
      <Nav
        id={this.props.id}
        bsStyle='tabs'
        activeKey={this.props.activeKey}
        onSelect={this.props.onSelect}
      >
        { tabs }
      </Nav>
    );
  }
}

TabBar.propTypes = {
  activeKey: React.PropTypes.number,
  id: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  teams: React.PropTypes.array
};

module.exports = TabBar;
