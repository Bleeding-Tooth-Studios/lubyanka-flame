export type PlayerCharacter = Model & {
	["Left Leg"]: Part;
	Humanoid: Humanoid;
	["Right Leg"]: Part;
	Head: Part & {
		HatAttachment: Attachment;
		HairAttachment: Attachment;
		FaceFrontAttachment: Attachment;
		FaceCenterAttachment: Attachment;
	};
	Torso: Part & {
		["Left Shoulder"]: Motor6D;
		WaistCenterAttachment: Attachment;
		BodyBackAttachment: Attachment;
		Neck: Motor6D;
		["Right Hip"]: Motor6D;
		WaistBackAttachment: Attachment;
		LeftCollarAttachment: Attachment;
		NeckAttachment: Attachment;
		RightCollarAttachment: Attachment;
		BodyFrontAttachment: Attachment;
		["Left Hip"]: Motor6D;
		["Right Shoulder"]: Motor6D;
		WaistFrontAttachment: Attachment;
	};
	HumanoidRootPart: Part & {
		RootJoint: Motor6D;
	};
	["Right Arm"]: Part & {
		RightShoulderAttachment: Attachment;
	};
	["Left Arm"]: Part & {
		LeftShoulderAttachment: Attachment;
	};
};
