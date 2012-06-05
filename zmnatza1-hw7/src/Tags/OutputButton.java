package Tags;

import java.io.IOException;

import javax.servlet.jsp.tagext.SimpleTagSupport;

public class OutputButton extends SimpleTagSupport {
	private String outputEl;

	private String outputText;

	public String getOutputEl() {
		return outputEl;
	}

	public void setOutputEl(String outputEl) {
		this.outputEl = outputEl;
	}

	public String getOutputText() {
		return outputText;
	}

	public void setOutputText(String outputText) {
		this.outputText = outputText;
	}

	@Override
	public void doTag() throws IOException {
		getJspContext().getOut()
				.print("<input type=\"button\" value=\"Output Something\" onClick=\"document.getElementById('"
						+ outputEl + "').innerHTML='" + outputText + "'\"/>");
	}
}
