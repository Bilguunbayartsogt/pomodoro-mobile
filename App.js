import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import { formatTime } from "./utils/functions";

const Pomodoro = () => {
	const DEF_SESS = 1500;
	const DEF_BRK = 300;

	const [sessionTimer, setSessionTimer] = useState(DEF_SESS);
	const [breakTimer, setBreakTimer] = useState(DEF_BRK);

	const [sessionLength, setSessionLength] = useState(DEF_SESS);
	const [breakLength, setBreakLength] = useState(DEF_BRK);

	const [sessionInterval, setSessionInterval] = useState(null);
	const [breakInterval, setBreakInterval] = useState(null);

	const [isSession, setIsSession] = useState(true);
	const [isUpdateVisible, setIsUpdateVisible] = useState(true);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#ecf0f1",
				marginTop: 50,
			}}
		>
			<Text
				style={{
					fontSize: 40,
				}}
			>
				Pomodoro
			</Text>
			<View>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					Status: {"\n"}
					<Text>{formatTime(sessionTimer)}</Text>
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
				}}
			>
				<Text>
					Session length: {"\n"}
					<Text>{sessionLength / 60}</Text>
				</Text>
				<Text>
					Break length: {"\n"}
					<Text>{breakLength / 60}</Text>
				</Text>
			</View>
		</View>
	);
};

export default Pomodoro;
