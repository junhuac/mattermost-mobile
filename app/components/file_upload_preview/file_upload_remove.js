// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {makeStyleSheetFromTheme} from 'app/utils/theme';

import TouchableWithFeedback from 'app/components/touchable_with_feedback';

export default class FileUploadRemove extends PureComponent {
    static propTypes = {
        channelId: PropTypes.string,
        clientId: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        rootId: PropTypes.string,
        theme: PropTypes.object.isRequired,
    };

    handleOnPress = () => {
        const {channelId, clientId, onPress, rootId} = this.props;

        onPress(clientId, channelId, rootId);
    };

    render() {
        const style = getStyleSheet(this.props.theme);
        return (
            <TouchableWithFeedback
                style={style.removeButtonWrapper}
                onPress={this.handleOnPress}
                type={'opacity'}
            >
                <Icon
                    name='close-circle'
                    color={this.props.theme.centerChannelColor}
                    size={20}
                    style={style.removeButtonIcon}
                />
            </TouchableWithFeedback>
        );
    }
}

const getStyleSheet = makeStyleSheetFromTheme((theme) => {
    return {
        removeButtonIcon: Platform.select({
            ios: {
                marginTop: 2,
            },
        }),
        removeButtonWrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            overflow: 'hidden',
            elevation: 11,
            top: 7,
            right: 7,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: theme.centerChannelBg,
            borderWidth: 2,
            borderColor: theme.centerChannelBg,
        },
    };
});
