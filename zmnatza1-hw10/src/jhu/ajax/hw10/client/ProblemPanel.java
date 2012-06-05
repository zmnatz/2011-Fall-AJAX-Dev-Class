package jhu.ajax.hw10.client;

import com.google.gwt.user.client.ui.AbsolutePanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class ProblemPanel extends AbsolutePanel {
	private static final String ERROR_CLASS = "error";
	private Label outputLabel = new Label();
	
	public ProblemPanel(Widget... widgets){
		for(Widget w : widgets)
			add(w);
		add(outputLabel);
	}
	
	public void output(String output) {
		output(output,false);
	}
	
	public void output(String output, boolean error){
		outputLabel.setText(output);
		outputLabel.setStyleName(ERROR_CLASS,error);
	}
}
