package Data;

/**
 * Utility methods
 */
public class Utilities {
	public static double[] generateRandoms(int numRandoms) {
		double[] randoms = new double[numRandoms];
		for(int i=0;i<numRandoms;i++) 
			randoms[i] = Math.random();
		return randoms;
	}
}
