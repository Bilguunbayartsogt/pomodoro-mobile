import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

const App = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [petName, setPetName] = useState("");
	const [petDob, setPetDob] = useState("");
	const [breed, setBreed] = useState("");
	const [favToy, setFavToy] = useState("");

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				backgroundColor: "#ecf0f1",
				marginTop: 50,
			}}
		>
			<ScrollView>
				<InputField state={email} callback={setEmail} data="email"></InputField>
				<InputField
					state={password}
					callback={setPassword}
					data="password"
				></InputField>
				<InputField
					state={petName}
					callback={setPetName}
					data="pet name"
				></InputField>
				<InputField
					state={petDob}
					callback={setPetDob}
					data="pet date of birth"
				></InputField>
				<InputField state={breed} callback={setBreed} data="breed"></InputField>
				<InputField
					state={favToy}
					callback={setFavToy}
					data="favorite toy"
				></InputField>
			</ScrollView>
		</View>
	);
};

export default App;

export const InputField = (props) => {
	return (
		<View
			style={{
				padding: 16,
			}}
		>
			<Text
				style={{
					padding: 8,
					fontSize: 18,
				}}
			>
				Enter your {props.data}: {props.data !== "password" ? props.state : ""}
			</Text>
			<TextInput
				secureTextEntry={props.data === "password"}
				placeholder="type here..."
				onChangeText={(value) => {
					props.callback(value);
				}}
				style={{
					padding: 8,
					fontSize: 18,
					borderWidth: 1,
					borderColor: "black",
				}}
			/>
		</View>
	);
};
