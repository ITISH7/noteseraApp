import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import { useNavigation } from "@react-navigation/native";
import bookimage from "../assets/Images/bookimage.png";
const SubjectList = ({subjectRelatedData}) => {
  const navigate = useNavigation()
  return (
    <View className="flex-row items-center rounded-3xl p-3 bg-white shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 70, width: 70 }}
        source={bookimage}
      ></Image>
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-lg">{subjectRelatedData.subjectName}</Text>
        </View>
      </View>
      <TouchableOpacity className="pl-3" onPress={()=>{
        navigate.navigate("subject",{...subjectRelatedData})
      }}>
            <Text className="font-bold" style={{color:themeColors.text}}> view subject</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SubjectList;
