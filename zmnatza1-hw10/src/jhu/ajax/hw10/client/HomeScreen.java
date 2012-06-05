package jhu.ajax.hw10.client;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;

public class HomeScreen implements EntryPoint {
	private static final String RED_BG_CLASS = "Red-Background";
	private static final String BLUE_BG_CLASS = "Blue-Background";

	public void onModuleLoad() {
		generateGreetingForm("problem1");
		generateSumForm("problem2");
		generateRandomRange("problem3");
		generateRadios("problem4");
	}

	private void generateGreetingForm(String divId) {
		final TextBox langBox = new TextBox();
		final Button langButton = new Button("Say Hello");
		final ProblemPanel panel = new ProblemPanel(langBox,langButton);

		langButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				String language = langBox.getText();
				if ("English".equals(language))
					panel.output("Hello");
				else if ("Spanish".equals(language))
					panel.output("Hola");
				else
					panel.output("Error",true);
			}
		});

		RootPanel.get(divId).add(panel);
	}

	private void generateSumForm(String divId) {
		final TextBox number1 = new TextBox();
		final TextBox number2 = new TextBox();
		final ProblemPanel panel = new ProblemPanel(number1,number2);
		
		KeyUpHandler numberChange = new KeyUpHandler() {
			@Override
			public void onKeyUp(KeyUpEvent event) {
				try {
					double sum = Double.parseDouble(number1
							.getText()) + Double.parseDouble(number2.getText());
					panel.output(Double.toString(sum));
				} catch (NumberFormatException e) {
					panel.output("Error",true);
				}
			}
		};
		number1.addKeyUpHandler(numberChange);
		number2.addKeyUpHandler(numberChange);
		RootPanel.get(divId).add(panel);
	}

	private void generateRandomRange(String divId) {
		final ListBox listBox = new ListBox();
		final ProblemPanel panel = new ProblemPanel(listBox);
		
		listBox.addItem("Choose Range");
		for (String item : new String[] {"10", "100", "1,000", "10,000" })
			listBox.addItem("0-"+item);
		
		listBox.addChangeHandler(new ChangeHandler() {
			@Override
			public void onChange(ChangeEvent event) {
				ListBox source = (ListBox) event.getSource();
				if(source.getSelectedIndex()==0)
					panel.output("");
				else {
					String[] range = source.getValue(source.getSelectedIndex())
							.split("-");
					panel.output(Double.toString(Math.random()
							* Double.parseDouble(range[1].replace(",", ""))));
				}
			}
		});
		RootPanel.get(divId).add(panel);
	}
	
	private void generateRadios(String divId) {
		List<RadioButton> radioButtons = Arrays.asList( 
				new RadioButton("backgroundColor", "Default"),
				new RadioButton("backgroundColor", "Red"),
				new RadioButton("backgroundColor", "Blue"));
		radioButtons.get(0).setValue(true);
		
		ClickHandler clickHandler = new ClickHandler(){
			@Override
			public void onClick(ClickEvent event) {
				String val = ((RadioButton)event.getSource()).getText();
				if("Default".equals(val))
					RootPanel.get().setStyleName("");
				else if("Red".equals(val))
					RootPanel.get().setStyleName(RED_BG_CLASS);
				else if("Blue".equals(val))
					RootPanel.get().setStyleName(BLUE_BG_CLASS);
			}
		};

		RootPanel div = RootPanel.get(divId);
		for(RadioButton rb : radioButtons){
			rb.addClickHandler(clickHandler);
			div.add(rb);
		}
	}
}
