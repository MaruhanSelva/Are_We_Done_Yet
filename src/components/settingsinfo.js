

function SettingsList(props) {
    console.log(props.gInfo);

    return (
        <div className="settings_list">
            <div className="setting_row">
                <strong>GroupID:</strong> {props.gInfo[0][0].GID}
            </div>

            <div className="setting_row">
                <strong>GroupPassword:</strong> {props.gInfo[0][0].Pass}
            </div>

            <div className="setting_row">
                <strong>GroupLeader:</strong> {props.gInfo[0][0].LeaderUID}
            </div>
        </div>
    )
}

export default SettingsList;