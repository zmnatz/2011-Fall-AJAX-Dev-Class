import javax.servlet.*;
import org.jabsorb.*;

import Data.UserDatabase;

public class JsonRpcInitializer implements ServletContextListener {
	public void contextInitialized(ServletContextEvent event) {
		UserDatabase userDatabase = new UserDatabase();
		JSONRPCBridge globalBridge = JSONRPCBridge.getGlobalBridge();
		globalBridge.registerObject("userDatabase", userDatabase);
	}

	public void contextDestroyed(ServletContextEvent event) {
	}
}
