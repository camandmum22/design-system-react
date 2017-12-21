define(['module', 'react', '@storybook/react', '../../icon-settings', '../__examples__/logo.svg', '../../global-header', '../../global-header/button', '../../global-header/dropdown', '../../global-header/profile', '../../global-header/search', '../../../utilities/constants', '../../global-navigation-bar/__docs__/storybook-stories'], function (module, _react, _react3, _iconSettings, _logo, _globalHeader, _button, _dropdown, _profile, _search, _constants, _storybookStories) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _iconSettings2 = _interopRequireDefault(_iconSettings);

	var _logo2 = _interopRequireDefault(_logo);

	var _globalHeader2 = _interopRequireDefault(_globalHeader);

	var _button2 = _interopRequireDefault(_button);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _profile2 = _interopRequireDefault(_profile);

	var _search2 = _interopRequireDefault(_search);

	var _storybookStories2 = _interopRequireDefault(_storybookStories);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/* eslint-disable react/prop-types */
	/* eslint-disable no-script-url */
	/* eslint-disable react/display-name */

	var HeaderProfileCustomContent = function HeaderProfileCustomContent(props) {
		return _react2.default.createElement(
			'div',
			{ id: 'custom-dropdown-menu-content' },
			_react2.default.createElement(
				'div',
				{ className: 'slds-m-around--medium' },
				_react2.default.createElement(
					'div',
					{ className: 'slds-tile slds-tile--board slds-m-horizontal--small' },
					_react2.default.createElement(
						'p',
						{ className: 'tile__title slds-text-heading--small' },
						'Art Vandelay'
					),
					_react2.default.createElement(
						'div',
						{ className: 'slds-tile__detail' },
						_react2.default.createElement(
							'p',
							{ className: 'slds-truncate' },
							_react2.default.createElement(
								'a',
								{
									className: 'slds-m-right--medium',
									href: 'javascript:void(0)',
									onClick: props.onClick
								},
								'Settings'
							),
							_react2.default.createElement(
								'a',
								{ href: 'javascript:void(0)', onClick: props.onClick },
								'Log Out'
							)
						)
					)
				)
			)
		);
	};

	/* eslint-disable react/display-name */
	var GlobalHeaderDemo = function GlobalHeaderDemo(props) {
		return _react2.default.createElement(
			_globalHeader2.default,
			{
				logoSrc: _logo2.default,
				onSkipToContent: (0, _react3.action)('Skip to Main Content'),
				onSkipToNav: (0, _react3.action)('Skip to Navigation'),
				navigation: (0, _storybookStories2.default)(props)
			},
			_react2.default.createElement(_search2.default, {
				onSelect: (0, _react3.action)('Search Selected'),
				placeholder: 'Search Salesforce',
				options: [{ label: 'Email' }, { label: 'Mobile' }]
			}),
			_react2.default.createElement(_button2.default, {
				className: 'slds-m-right--small',
				iconVariant: null,
				label: 'Feedback',
				onClick: (0, _react3.action)('Feedback Clicked'),
				variant: 'neutral'
			}),
			_react2.default.createElement(_dropdown2.default, {
				openOn: props.openOn,
				assistiveText: 'Global Actions',
				globalAction: true,
				iconCategory: 'utility',
				iconName: 'add',
				onSelect: (0, _react3.action)('Action Selected'),
				options: [{
					label: 'New Note',
					rightIcon: { category: 'standard', name: 'note', size: 'small' }
				}, {
					label: 'Log a Call',
					rightIcon: { category: 'standard', name: 'log_a_call', size: 'small' }
				}]
			}),
			_react2.default.createElement(_button2.default, {
				assistiveText: 'Help and Training',
				iconName: 'question',
				onClick: (0, _react3.action)('Help Clicked')
			}),
			_react2.default.createElement(_dropdown2.default, {
				openOn: props.openOn,
				assistiveText: 'Setup',
				iconName: 'setup',
				onSelect: (0, _react3.action)('Action Selected'),
				options: [{ label: 'Global Setup' }, { label: 'Permissions' }]
			}),
			_react2.default.createElement(_button2.default, {
				assistiveText: 'Notifications',
				iconName: 'Notification',
				onClick: (0, _react3.action)('Notifications Clicked')
			}),
			_react2.default.createElement(
				_profile2.default,
				{
					openOn: props.openOn,
					onClick: (0, _react3.action)('Profile Clicked'),
					onSelect: (0, _react3.action)('Profile Selected')
				},
				_react2.default.createElement(HeaderProfileCustomContent, null)
			)
		);
	};

	(0, _react3.storiesOf)(_constants.GLOBAL_HEADER, module).addDecorator(function (getStory) {
		return _react2.default.createElement(
			'div',
			{ className: 'slds-p-around--medium' },
			_react2.default.createElement(
				_iconSettings2.default,
				{ iconPath: '/assets/icons' },
				getStory()
			)
		);
	}).add('Search + Navigation', function () {
		return _react2.default.createElement(GlobalHeaderDemo, null);
	}).add('Open on Hybrid', function () {
		return _react2.default.createElement(GlobalHeaderDemo, { openOn: 'hybrid' });
	}).add('Fewer Elements', function () {
		return _react2.default.createElement(
			_globalHeader2.default,
			{ logoSrc: _logo2.default },
			_react2.default.createElement(_dropdown2.default, {
				assistiveText: 'Setup',
				iconName: 'setup',
				onSelect: (0, _react3.action)('Action Selected'),
				options: [{ label: 'Global Setup' }, { label: 'Permissions' }]
			}),
			_react2.default.createElement(_profile2.default, {
				onClick: (0, _react3.action)('Profile Clicked'),
				onSelect: (0, _react3.action)('Profile Selected'),
				options: [{ label: 'Profile Menu' }]
			})
		);
	});
});